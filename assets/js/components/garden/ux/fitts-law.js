export default {
  title: "Fitt's Law",
  description: 'Time to target = distance to and size of the target',
  type: 'ux',
  category: 'usability',
  difficulty: 'beginner',
  thumbnail: '/assets/images/ux/thumbnails/fitts.svg',
  readTime: '5 min read',
  dateAdded: '2025-07-01',
  content: {
    overview:
      "Fitt's Law is one of the most important predictive models in human-computer interaction. Formulated by psychologist Paul Fitts in 1954, it describes the time it takes for a person to rapidly move to a target area as a function of the ratio between the distance to the target and the width of the target. In simple terms: the bigger and closer something is, the faster you can click it.",

    background:
      "Originally developed to understand human motor performance in controlled laboratory settings, Fitt's Law has become fundamental to interface design. The law mathematically predicts that the time required to rapidly move to a target area is logarithmically related to the distance over the size of the target. This means that doubling the distance increases time by a constant amount, while doubling the size decreases time by the same constant.",

    keyInsights:
      "The beauty of Fitt's Law lies in its practical applications for digital interfaces. It explains why buttons at screen edges are faster to click (they have infinite width in one direction), why larger buttons feel more responsive, and why contextual menus appearing near the cursor are more efficient than traditional menu bars. Understanding this law helps designers create interfaces that feel naturally responsive and reduce user effort.",

    examples: [
      {
        title: 'Good: Large Primary Actions',
        description:
          'Well-designed interfaces use generous button sizes for primary actions, especially on mobile devices where finger precision is limited.',
        // analysis:
        //   "Notice how successful apps like Instagram make their primary action buttons (like the camera button) significantly larger than secondary actions. This follows Fitt's Law by reducing the precision required for the most important user actions.",
        image: '/assets/images/ux/placeholder.svg',
      },
      {
        title: 'Bad: Tiny Interactive Elements',
        description:
          'Small click targets create friction and slow down user interactions, especially problematic on touch devices.',
        // analysis:
        //   "Many websites still use tiny close buttons (×) or small checkbox targets that require precise cursor movement. This violates Fitt's Law and creates unnecessary user frustration, particularly affecting users with motor impairments.",
        image: '/assets/images/ux/placeholder.svg',
      },
    ],

    applicationGuide:
      "When applying Fitt's Law in your designs, start by identifying the most frequent user actions and ensure these have the largest click targets. Position important elements near screen edges or corners where possible, as these locations provide infinite width in one direction. For mobile interfaces, follow accessibility guidelines that recommend minimum touch targets of 44px, but consider going larger for critical actions.",

    practicalTips:
      "Consider the user's context and device when sizing interactive elements. Desktop users can handle smaller targets due to mouse precision, but still benefit from generous sizing. For touch interfaces, account for finger size variations and the natural tremor in human motor control. Additionally, ensure adequate spacing between clickable elements to prevent accidental taps on adjacent items.",

    commonPitfalls:
      'The most frequent mistake is treating all interactive elements equally, making primary and secondary actions the same size. Another common error is placing important actions in hard-to-reach screen areas, such as the top-right corner on large displays or tablets. Designers also often underestimate the impact of element spacing, creating interfaces where users accidentally click wrong targets.',

    avoidanceTips:
      "Always test your interfaces with real users, especially on the actual devices they'll use. Pay attention to error rates and user frustration when interacting with small elements. Use heat mapping tools to understand where users naturally expect to find controls, and design your target sizes accordingly. Remember that what works on a desktop may not translate well to mobile or tablet interfaces.",

    relatedLaws: [
      {
        title: "Hick's Law",
        description:
          'The time it takes to make a decision increases with the number of choices',
        connection:
          "While Fitt's Law focuses on physical targeting, Hick's Law addresses cognitive load in decision-making",
      },
      {
        title: "Miller's Rule",
        description:
          'The average person can only keep 7±2 items in their working memory',
        connection:
          'Helps determine how many options to present alongside optimally-sized interactive elements',
      },
      {
        title: 'Steering Law',
        description:
          "Time required to navigate through a constrained path depends on the path's length and width",
        connection:
          "Extends Fitt's Law principles to navigation through tunnels and dropdown menus",
      },
    ],
  },
};
