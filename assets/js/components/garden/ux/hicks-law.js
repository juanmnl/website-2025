export default {
  title: "Hick's Law",
  description: 'Decisions and complexity of choices',
  type: 'ux',
  category: 'decision-making',
  difficulty: 'intermediate',
  thumbnail: '/assets/images/ux/thumbnails/hicks.svg',
  readTime: '5 min read',
  dateAdded: '2025-05-31',
  content: {
    overview:
      "Hick's Law, also known as the Hick-Hyman Law, reveals a fundamental truth about human decision-making: the time it takes to make a decision increases logarithmically with the number of available choices. Discovered by British psychologist William Edmund Hick in 1952, this principle has become essential for designing interfaces that help rather than hinder user decision-making.",

    background:
      "Hick's original research measured reaction times as participants chose between different stimuli. He found that decision time wasn't linear—adding the 8th choice didn't take as much additional time as adding the 2nd choice. This logarithmic relationship means that while more choices do slow decisions, the impact diminishes as options increase. However, this mathematical relationship assumes all choices are equally likely and familiar to the user.",

    keyInsights:
      "The power of Hick's Law extends beyond simple choice counting. It explains why progressive disclosure works, why defaults are crucial, and why expert users prefer different interfaces than novices. The law also reveals that choice complexity matters more than choice quantity—ten similar options are easier to process than three very different ones. Understanding this helps designers create interfaces that guide users toward optimal decisions rather than overwhelming them.",

    examples: [
      {
        title: 'Good: Smart Defaults & Recommendations',
        description:
          'Successful platforms reduce decision time by providing intelligent defaults and personalized recommendations.',
        // analysis:
        //   "Netflix exemplifies excellent application of Hick's Law. Instead of showing users their entire catalog, they present curated rows like 'Trending Now' and 'Because you watched...'. This reduces the decision space while maintaining choice variety. Users can dig deeper if needed, but most find what they want quickly.",
        image: '/assets/images/ux/placeholder.svg',
      },
      {
        title: 'Bad: Choice Overload',
        description:
          'Interfaces that present too many equivalent options create analysis paralysis and decision fatigue.',
        // analysis:
        //   "Many e-commerce sites violate Hick's Law by showing 50+ products per page without clear differentiation or filtering. Users struggle to compare options and often abandon their shopping journey. The paradox of choice kicks in—more options lead to less satisfaction and fewer decisions.",
        image: '/assets/images/ux/placeholder.svg',
      },
    ],

    applicationGuide:
      'Start by identifying decision points in your user flows and analyzing the choice complexity at each step. Use progressive disclosure to reveal options gradually, beginning with the most common or recommended choices. Implement smart defaults that work for 80% of users, but allow customization for power users. Consider using filters, categories, and search to help users narrow down large option sets before making final decisions.',

    practicalTips:
      "Design choice architecture thoughtfully—the order and presentation of options significantly impacts decision speed and quality. Use visual hierarchy to distinguish between primary and secondary choices. Implement 'recommended' or 'popular' badges to guide users toward proven options. For complex decisions, consider multi-step wizards that break the choice into smaller, manageable decisions.",

    commonPitfalls:
      "Many designers misapply Hick's Law by simply reducing the number of options without considering user goals or context. Another mistake is treating all choices as equal when some are clearly more important or common than others. Don't forget that removing choices can also be problematic if users need flexibility or feel constrained by limited options.",

    avoidanceTips:
      'Study your analytics to understand which choices users actually make versus which ones they ignore. Use A/B testing to validate that reducing choices actually improves user experience—sometimes users prefer having more options even if it slows them down. Consider different interfaces for different user types: novices benefit from simplified choices while experts often want full control.',

    relatedLaws: [
      {
        title: 'Analysis Paralysis',
        description: 'Overthinking a decision can lead to no decision at all',
        connection:
          "The extreme outcome when Hick's Law limits are exceeded, resulting in user abandonment",
      },
      {
        title: 'Paradox of Choice',
        description:
          'Having too many options can be overwhelming and lead to decision fatigue',
        connection:
          "Behavioral psychology principle that explains the negative outcomes of violating Hick's Law",
      },
      {
        title: 'Satisficing',
        description:
          'Users often choose the first acceptable option rather than the optimal one',
        connection:
          "Explains user behavior within Hick's Law constraints and why good defaults matter",
      },
    ],
  },
};
