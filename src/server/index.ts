import express from 'npm:express@4.18.2';
import cors from 'npm:cors@2.8.5';
import { z } from 'npm:zod@3.22.4';

const app = express();

app.use(cors());
app.use(express.json());

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

app.post('/api/contact', async (req, res) => {
  try {
    const data = contactSchema.parse(req.body);
    
    // Here you would typically:
    // 1. Store the message in a database
    // 2. Send an email notification
    // 3. Integrate with your CRM
    
    res.json({ success: true, message: 'Message received successfully' });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ success: false, errors: error.errors });
    } else {
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});