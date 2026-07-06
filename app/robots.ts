import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Allow all crawlers including AI bots
      { userAgent: '*', allow: '/' },
      // Explicit AI crawler permissions
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'anthropic-ai', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'Googlebot', allow: '/' },
    ],
    sitemap: 'https://www.greatdaneoutdoorservices.com/sitemap.xml',
  }
}
