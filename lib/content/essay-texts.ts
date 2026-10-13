// Verbatim full texts, keyed by essay slug. Only essays with
// publicFullText: true may appear here. Do not edit the wording; replace an
// entry if the author sends a corrected version.

export type EssayText = {
  paragraphs: string[];
  worksCited: string[];
  /** Titles of works, set in italics wherever they appear. */
  italicTitles: string[];
};

// Source: "Failed Refuge in Narayan.pdf"
const failedRefugeNarayan: EssayText = {
  paragraphs: [
    "R.K. Narayan's is one of the most critically acclaimed Indian English novelist. Narayan's novels offer a blend of \"gentle irony and sympathy, and quiet realism\" across his plots that focus on \"dramas of middle class life\" (Naik 168). Writing in both pre-independence and post-independence India, Narayan's works span across various themes. According to Naik, his art became more mature, firm, and presented a good-humored irony better in his works after Independence. Analysing his works, a striking pattern emerges; through fraud, shame, or grief, Narayan's characters first fail in ordinary life and then take the guise of faith, becoming a saint, or mystic, in hopes of a spiritual transformation absolving their past actions. Raju in The Guide (1958) becomes a saint after forgery and imprisonment, and Jagan in The Vendor of Sweets (1976) retreats into Gandhian renunciation after his failure as a father. In the selected texts, the temple and the ochre robe function as symbolic solutions, or ways of converting worldly failure into spiritual achievement without ever confronting it. However, Narayan consistently portrays the instability of this solution. His irony either collapses the guise of faith into ambiguity, or is undercut by comic, self-interested detail, or is exposed as psychological evasion rather than real transcendence. Faith, for Narayan, becomes a costume put on to avoid consequences which his narratives never allow to settle.",
    "The Guide stages this pattern most explicitly. Raju is a common \"con-man\" who has just been released from prison for forging Rosie's signature, takes refuge in an abandoned temple, where a villager mistakes his idle character for spiritual wisdom (Jilani). Raju looks at this as an opportunity to exploit the peasants for free meals and shelter; gradually, as he plays the role of a saint, he starts believing it. Narayan uses Raju's thoughts to be occupied with looking the part of a saint when he shows him wondering if \"a clean-shaven, close-haired saint was an anomaly\" (qtd. In Jilani). This signifies that Raju only looked at the saintly life as a persona constructed, like all of his previous roles. The ending of the novel presents a \"Hawthornian\" charge (Naik 171). Despite critics disagreeing on what the rain in the end signifies and whether Raju's death went in vain, Naik argues that the unresolved irony is a defining feature of Narayan's work. He keeps redemption and fraud entangled rather than one emerging triumphant. William Walsh also reads the novel's ending as deliberately ambiguous, which leaves the reader without a verdict on whether Raju's sainthood solved anything. The guise of the guide began as an escape from jail and its consequences but turned into another unresolved sentence of life, one that the text does not give a stable ending to.",
    "The structure is also prominent in The Vendor of Sweets. After his son Mali returns unmarried with a half-American, half-Korean girl, Jagan is ashamed of Mali's moral corruption. Due to his own complicity in this situation, Jagan abandons his sweet shop for Chinna's grove, framing this as the traditional Hindu passage into vanaprastha, the renunciation of worldly life (Kumar). Narayan's retreat is built from the contradictions that should have undone it: even as Jagan declares himself detached, he cannot resist in arranging his son's bail, instructing his cousin on letting Mali learn from his actions, and brining his chequebook with him in a saintly, renounced life. The chequebook and the Charkha both being carried in a renounced life serve his spiritual exit as partial (Kumar). The renunciate manages money, exercise paternal authority, and still cannot let go of the very worldly entanglements his new guise claims to have transcended. The temple grove in this novel, similar to Raju's shrine, becomes a stage on which Jagan's failure is comically preserved rather than being a real solution to his internal conflicted world.",
    "Critical readings of these texts claim that neither ending present a failure. Patrick Swinden posits that Raju's renunciation is an unmistakable shift to an orthodox Hindu perspective, not fraud sustained to the end (qtd. In Jilani). Similarly, Jagan's departure looks like an evasion only to \"Western readers\", since it rests on Hindu concepts of dharma and detachment which do not necessarily prescribe that worldly problems be solved in worldly ways. Both of these arguments warn against a Western imposition on an Indian narrative, built on different spiritual assumptions. However, Jilani calls Swinden's reading \"too simplistic\", since it ignores the consistent pattern in Narayan's storytelling of spirituality paired with \"fraudulent depictions\". The ambiguous ending is a deliberate part of the plot, not an oversight that resolves the argument in Raju's favour. Additionally, in Jagan's case the dharma-based defense fundamentally ignores the irony of a true vanaprastha. A cheque, bail arrangements, and financial instruments are not requirements for such a life, which is why Kumar claims that they are ironic details, not incidental. The cultural framework of the novels explains why the characters seek faith, but they do not bridge the gap that Narayan creates between the guise and its completion.",
    "Across both the texts, the saint and the temple are not vehicles of affirming faith but devices used to test the characters. Narayan ensues that his characters, when reaching for faith in a guise, fail. Raju's sainthood ends in an unresolved collapse, and Jagan's renunciation is undercut by the chequebook coexisting with the charkha. The plot, hence, never allows Raju and Jagan to settle into stability in their newly renounced life because they reached for it as a costume. The guise of faith in these narratives becomes a symptom of the character's desires for a complete erasure of the consequences of their wrongdoings, rather than a solution for earlier mistakes. At the same time, through a comic irony, they show that wanting a solution for the past does not guarantee achieving one."
  ],
  worksCited: [
    "Jilani, Sarah. \"Re-inhabiting Culture, Transforming the Self: R.K. Narayan's The Guide.\" The Critical Flame, no. 52, Jan.-Feb. 2018, criticalflame.org/re-inhabiting-culture-transforming-the-self-r-k-narayans-the-guide/.",
    "Kumar, Susheel. \"Order - Disorder - Order Again in R.K. Narayan's The Vendor of Sweets.\" The Achievers Journal, 2015, theachieversjournal.org/wp/susheel-kumarorder-disorder-order-again-in-r-k-narayans-the-vendor-of-sweets/.",
    "Naik, M. K. A History of Indian English Literature. Sahitya Akademi, 2023",
    "Walsh, William. R.K. Narayan: A Critical Appreciation. University of Chicago Press, 1982."
  ],
  italicTitles: [
    "The Vendor of Sweets",
    "The Guide",
    "A History of Indian English Literature",
    "R.K. Narayan: A Critical Appreciation",
    "The Critical Flame",
    "The Achievers Journal",
  ],
};

export const essayTexts: Record<string, EssayText> = {
  "failed-refuge-narayan": failedRefugeNarayan,
};
