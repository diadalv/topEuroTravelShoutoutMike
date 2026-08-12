/**
 * Parser for Wix Bookings service description format
 * Parses structured description into typed sections
 */

export interface ParsedExcursionDescription {
  quickFacts: Array<{ label: string; value: string }>;
  introHook: string[];
  tourDescription: string[];
  highlights: string[];
  included: string[];
  notIncluded: string[];
  goodToKnow: string[];
}

/**
 * Parse service description into structured sections
 * Expected format:
 * QUICK FACTS
 * <facts separated by " · ">
 * <intro-hook paragraphs with no heading>
 * TOUR DESCRIPTION
 * <paragraphs>
 * HIGHLIGHTS
 * <bullet lines beginning with •>
 * WHAT'S INCLUDED
 * <bullet lines>
 * WHAT'S NOT INCLUDED
 * <bullet lines>
 * GOOD TO KNOW
 * <bullet lines>
 */
export function parseExcursionDescription(description?: string): ParsedExcursionDescription {
  const result: ParsedExcursionDescription = {
    quickFacts: [],
    introHook: [],
    tourDescription: [],
    highlights: [],
    included: [],
    notIncluded: [],
    goodToKnow: [],
  };

  if (!description || typeof description !== 'string') {
    return result;
  }

  // Split by section headers (case-insensitive)
  const sections = description.split(/\n(?=(?:QUICK FACTS|TOUR DESCRIPTION|HIGHLIGHTS|WHAT'S INCLUDED|WHAT'S NOT INCLUDED|GOOD TO KNOW))/i);

  let currentSection = 'intro'; // Start with intro before first header
  let introContent = '';

  for (const section of sections) {
    const lines = section.split('\n').map(l => l.trim()).filter(Boolean);
    if (lines.length === 0) continue;

    const firstLine = lines[0].toUpperCase();

    if (firstLine.includes('QUICK FACTS')) {
      currentSection = 'quickFacts';
      // Parse facts from remaining lines
      const factLines = lines.slice(1);
      for (const line of factLines) {
        if (line.includes('·')) {
          // Multiple facts on one line
          const facts = line.split('·').map(f => f.trim()).filter(Boolean);
          for (const fact of facts) {
            const [label, value] = fact.split(':').map(p => p.trim());
            if (label && value) {
              result.quickFacts.push({ label, value });
            }
          }
        } else if (line.includes(':')) {
          // Single fact
          const [label, value] = line.split(':').map(p => p.trim());
          if (label && value) {
            result.quickFacts.push({ label, value });
          }
        }
      }
    } else if (firstLine.includes('TOUR DESCRIPTION')) {
      currentSection = 'tourDescription';
      result.tourDescription = lines.slice(1).filter(l => !l.match(/^[A-Z\s]+$/));
    } else if (firstLine.includes('HIGHLIGHTS')) {
      currentSection = 'highlights';
      result.highlights = lines.slice(1)
        .map(l => l.replace(/^[•\-\*]\s*/, '').trim())
        .filter(Boolean);
    } else if (firstLine.includes("WHAT'S INCLUDED")) {
      currentSection = 'included';
      result.included = lines.slice(1)
        .map(l => l.replace(/^[•\-\*]\s*/, '').trim())
        .filter(Boolean);
    } else if (firstLine.includes("WHAT'S NOT INCLUDED")) {
      currentSection = 'notIncluded';
      result.notIncluded = lines.slice(1)
        .map(l => l.replace(/^[•\-\*]\s*/, '').trim())
        .filter(Boolean);
    } else if (firstLine.includes('GOOD TO KNOW')) {
      currentSection = 'goodToKnow';
      result.goodToKnow = lines.slice(1)
        .map(l => l.replace(/^[•\-\*]\s*/, '').trim())
        .filter(Boolean);
    } else if (currentSection === 'intro') {
      // Accumulate intro content before first section
      introContent += (introContent ? '\n' : '') + section;
    }
  }

  // Parse intro hook (paragraphs before TOUR DESCRIPTION)
  if (introContent) {
    result.introHook = introContent
      .split('\n')
      .map(l => l.trim())
      .filter(l => Boolean(l) && !l.match(/^[A-Z\s]+$/))
      .filter(l => !l.includes('·')); // Exclude quick facts line
  }

  return result;
}

/**
 * Extract intro hook paragraphs (first meaningful content after quick facts)
 */
export function getIntroHookParagraph(parsed: ParsedExcursionDescription): string {
  if (parsed.introHook.length > 0) {
    return parsed.introHook[0];
  }
  if (parsed.tourDescription.length > 0) {
    return parsed.tourDescription[0];
  }
  return '';
}
