export default {
  title: "Miller's Rule (7±2)",
  description: 'Holding objects in shorterm memory',
  type: 'ux',
  category: 'cognitive',
  difficulty: 'beginner',
  thumbnail: '/assets/images/ux/thumbnails/millers.svg',
  readTime: '5 min read',
  dateAdded: '2025-07-09',
  content: {
    overview:
      "Miller's Rule, also known as Miller's Magic Number, is a cornerstone principle in cognitive psychology that directly impacts interface design. George Miller's 1956 research revealed that the average human can hold approximately 7 (plus or minus 2) pieces of information in their short-term memory simultaneously. This limitation has profound implications for how we organize and present information in digital interfaces.",

    background:
      "Miller's original research focused on span of immediate memory and absolute judgment tasks. He discovered that whether people were remembering sequences of numbers, words, or even distinguishing between different tones, their capacity consistently hit a ceiling around seven items. This isn't just about remembering lists—it's about the fundamental cognitive load our brains can handle when processing information in real-time.",

    keyInsights:
      "The magic of Miller's Rule lies in understanding that it's not just about counting items, but about cognitive chunks. Our brains naturally group related information together, allowing us to exceed the 7±2 limit through strategic organization. This is why phone numbers are grouped (555-123-4567), why navigation menus are categorized, and why progressive disclosure has become a fundamental design pattern. The rule teaches us that simplicity isn't just aesthetic—it's cognitive necessity.",

    examples: [
      {
        title: 'Good: Organized Navigation',
        description:
          'Well-structured navigation groups related items into logical categories, making it easier for users to find what they need.',
        // analysis:
        //   "Amazon's navigation demonstrates excellent chunking strategy. Instead of listing dozens of categories linearly, they group items into meaningful sections like 'Electronics', 'Home & Garden', etc. Each section contains sub-items, but the top level respects cognitive limits.",
        image: '/assets/images/ux/placeholder.svg',
      },
      {
        title: 'Bad: Overwhelming Choice',
        description:
          'Interfaces that present too many options simultaneously create decision paralysis and cognitive overload.',
        // analysis:
        //   "Many enterprise software applications break Miller's Rule by presenting 15+ menu items at once. Users struggle to scan these options efficiently, often missing important features or feeling overwhelmed by the interface complexity.",
        image: '/assets/images/ux/placeholder.svg',
      },
    ],

    applicationGuide:
      'When designing interfaces, audit every screen for cognitive load. Count the number of distinct choices, information groups, or actions presented simultaneously. If you exceed 7±2 items, look for natural groupings or consider progressive disclosure. This applies to navigation menus, form fields, product catalogs, and even notification systems. Remember that mobile interfaces should lean toward the lower end of this range due to screen size constraints.',

    practicalTips:
      'Use card sorting exercises with real users to understand how they naturally group information. This reveals intuitive categories that respect cognitive limitations. Implement breadcrumbs and clear hierarchies to help users understand their location within complex information architectures. Consider using tabs, accordions, or step-by-step processes to break complex tasks into manageable chunks.',

    commonPitfalls:
      "Designers often confuse visual organization with cognitive organization, thinking that simply arranging items in neat rows solves the problem. Another mistake is applying the rule too rigidly—some contexts can handle more complexity, while others need even more simplification. Don't forget that cognitive load includes more than just visible elements; mental effort required to understand relationships between items also counts.",

    avoidanceTips:
      "Test your designs with users who are unfamiliar with your domain. Fresh eyes quickly reveal cognitive overload that domain experts might miss. Use analytics to identify where users hesitate or abandon tasks—these often indicate violations of Miller's Rule. Consider the user's context: a focused professional tool can handle more complexity than a consumer app used casually.",

    relatedLaws: [
      {
        title: "Hick's Law",
        description:
          'Decision time increases logarithmically with the number of choices',
        connection:
          "Works hand-in-hand with Miller's Rule to optimize choice architecture and decision-making flows",
      },
      {
        title: 'Cognitive Load Theory',
        description:
          'Learning is impacted by the amount of mental effort being used in working memory',
        connection:
          "Provides the theoretical foundation for why Miller's limits exist and how to design within them",
      },
      {
        title: 'Progressive Disclosure',
        description:
          'Present only necessary information at each step of a process',
        connection:
          "A design pattern that directly applies Miller's Rule to manage information presentation over time",
      },
    ],
  },
};
