import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  author: z.string(),
  category: z.string(),
  tags: z.array(z.string()).optional(),
  readTime: z.number().optional(),
  image: z.string().optional(),
});

const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  category: z.string(),
  tags: z.array(z.string()).optional(),
  image: z.string().optional(),
  url: z.string().optional(),
  date: z.coerce.date().optional(),
});

const serviceSchema = z.object({
  title: z.string(),
  description: z.string(),
  icon: z.string().optional(),
  features: z.array(z.string()).optional(),
  order: z.number().optional(),
});

const solutionSchema = z.object({
  title: z.string(),
  description: z.string(),
  icon: z.string().optional(),
  features: z.array(z.string()).optional(),
  partners: z.array(z.string()).optional(),
  order: z.number().optional(),
});

const testimonialSchema = z.object({
  name: z.string(),
  role: z.string(),
  company: z.string(),
  rating: z.number().optional(),
  image: z.string().optional(),
  date: z.coerce.date().optional(),
});

const toolSchema = z.object({
  title: z.string(),
  description: z.string(),
  tags: z.array(z.string()).optional(),
  icon: z.string().optional(),
  url: z.string().optional(),
  order: z.number().optional(),
});

const teamSchema = z.object({
  name: z.string(),
  role: z.string(),
  bio: z.string(),
  image: z.string().optional(),
  linkedin: z.string().optional(),
  twitter: z.string().optional(),
  order: z.number().optional(),
});

const faqSchema = z.object({
  question: z.string(),
  order: z.number().optional(),
});

function col(type: string, base: string, schema: z.ZodObject<any>) {
  return defineCollection({
    loader: glob({ pattern: '**/*.md', base: `src/content/${base}` }),
    schema,
  });
}

export const collections = {
  'en-blog': col('content', 'en-blog', blogSchema),
  'en-projects': col('content', 'en-projects', projectSchema),
  'en-services': col('content', 'en-services', serviceSchema),
  'en-solutions': col('content', 'en-solutions', solutionSchema),
  'en-testimonials': col('content', 'en-testimonials', testimonialSchema),
  'en-tools': col('content', 'en-tools', toolSchema),
  'en-team': col('content', 'en-team', teamSchema),
  'en-faq': col('content', 'en-faq', faqSchema),

  'tr-blog': col('content', 'tr-blog', blogSchema),
  'tr-projects': col('content', 'tr-projects', projectSchema),
  'tr-services': col('content', 'tr-services', serviceSchema),
  'tr-solutions': col('content', 'tr-solutions', solutionSchema),
  'tr-testimonials': col('content', 'tr-testimonials', testimonialSchema),
  'tr-tools': col('content', 'tr-tools', toolSchema),
  'tr-team': col('content', 'tr-team', teamSchema),
  'tr-faq': col('content', 'tr-faq', faqSchema),

  'sk-blog': col('content', 'sk-blog', blogSchema),
  'sk-projects': col('content', 'sk-projects', projectSchema),
  'sk-services': col('content', 'sk-services', serviceSchema),
  'sk-solutions': col('content', 'sk-solutions', solutionSchema),
  'sk-testimonials': col('content', 'sk-testimonials', testimonialSchema),
  'sk-tools': col('content', 'sk-tools', toolSchema),
  'sk-team': col('content', 'sk-team', teamSchema),
  'sk-faq': col('content', 'sk-faq', faqSchema),
};
