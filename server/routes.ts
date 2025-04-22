import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  contactSchema, 
  insertMessageSchema, 
  insertExperienceSchema, 
  insertInterestSchema 
} from "@shared/schema";
import { z } from "zod";
import { ZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body
      const contactData = contactSchema.parse(req.body);
      
      // Store the contact message in the database
      const message = await storage.createMessage(contactData);
      
      // Return success response
      res.status(200).json({ 
        success: true, 
        message: "Your message has been received. Thank you for contacting me!",
        data: message
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Handle validation errors
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        // Handle other errors
        console.error("Error processing contact form:", error);
        res.status(500).json({ 
          success: false, 
          message: "An error occurred while processing your message" 
        });
      }
    }
  });

  // Experience endpoints
  app.get('/api/experiences', async (req, res) => {
    try {
      const type = req.query.type as string;
      let experiences;
      
      if (type) {
        experiences = await storage.getExperiencesByType(type);
      } else {
        experiences = await storage.getExperiences();
      }
      
      res.status(200).json(experiences);
    } catch (error) {
      console.error('Error fetching experiences:', error);
      res.status(500).json({ message: 'Error fetching experiences' });
    }
  });

  app.get('/api/experiences/:id', async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const experience = await storage.getExperience(id);
      
      if (!experience) {
        return res.status(404).json({ message: 'Experience not found' });
      }
      
      res.status(200).json(experience);
    } catch (error) {
      console.error('Error fetching experience:', error);
      res.status(500).json({ message: 'Error fetching experience' });
    }
  });

  app.post('/api/experiences', async (req, res) => {
    try {
      const validatedData = insertExperienceSchema.parse(req.body);
      const experience = await storage.createExperience(validatedData);
      res.status(201).json(experience);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ errors: error.errors });
      } else {
        console.error('Error creating experience:', error);
        res.status(500).json({ message: 'Error creating experience' });
      }
    }
  });

  // Interest endpoints
  app.get('/api/interests', async (_req, res) => {
    try {
      const interests = await storage.getInterests();
      res.status(200).json(interests);
    } catch (error) {
      console.error('Error fetching interests:', error);
      res.status(500).json({ message: 'Error fetching interests' });
    }
  });

  app.get('/api/interests/:id', async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const interest = await storage.getInterest(id);
      
      if (!interest) {
        return res.status(404).json({ message: 'Interest not found' });
      }
      
      res.status(200).json(interest);
    } catch (error) {
      console.error('Error fetching interest:', error);
      res.status(500).json({ message: 'Error fetching interest' });
    }
  });

  app.post('/api/interests', async (req, res) => {
    try {
      const validatedData = insertInterestSchema.parse(req.body);
      const interest = await storage.createInterest(validatedData);
      res.status(201).json(interest);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ errors: error.errors });
      } else {
        console.error('Error creating interest:', error);
        res.status(500).json({ message: 'Error creating interest' });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
