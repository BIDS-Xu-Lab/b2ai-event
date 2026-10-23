// Slide decks from the open sessions, hosted as PDFs in the shared
// "Slides for Presentation / <session> / For Portal" Google Drive folders.
export interface Talk {
  title: string;
  speakers: string;
  /** Google Drive file ID of the PDF; omit if the deck isn't posted yet. */
  driveId?: string;
}

export interface AgendaSession {
  day: string;
  title: string;
  talks: Talk[];
}

export const driveUrl = (id: string) => `https://drive.google.com/file/d/${id}/view`;

export const agenda: AgendaSession[] = [
  {
    day: 'Day 1 · October 20',
    title: 'Opening & Introduction',
    talks: [
      { title: 'Welcome', speakers: 'Yael Bensoussan, Alex Bui & Azra Bihorac', driveId: '1ysy95EwrIob1ptgAQtKFk-5R4Eg4i9Ru' },
      { title: 'Introduction to Bridge2AI', speakers: 'Lucila Ohno-Machado', driveId: '1YXP-be4vl8r8smzBTrDr4sHk2OaI2-GN' },
    ],
  },
  {
    day: 'Day 1 · October 20',
    title: 'Consortium Briefings',
    talks: [
      { title: 'Salutogenesis', speakers: 'Bhavesh Patel', driveId: '19SGuk6UBezb9UnTvEOv7jO6h4mWjGO78' },
      { title: 'Functional Genomics', speakers: 'Trey Ideker', driveId: '17oVvrQWfsFXAbjHTrV63a57CjtWmVnLq' },
      { title: 'AI/ML for Clinical Care', speakers: 'Eric Rosenthal', driveId: '1iRmCXcfgHLJs99plRdnxUeX3oU1QUq3W' },
      { title: 'Precision Medicine (Voice)', speakers: 'Yael Bensoussan', driveId: '1yQ9GFc4t41uevEhOXlactW97wn_y0Gv3' },
      { title: 'Open House, Training, Recruitment & Mentoring', speakers: 'Alex Bui', driveId: '1vAcsI_P-ZDBVV52MYs13aCjBzu4Vz8Bm' },
      { title: 'Standards & Teaming', speakers: 'Monica Munoz-Torres', driveId: '1V117j9lveExhGlwqm32O8L7Po67JveM_' },
      { title: 'Communications, Meeting, Portal & Ethical, Legal and Social Implications', speakers: 'Lucila Ohno-Machado & Brad Malin', driveId: '1jmXtBIS5RD0z0iQSXx5IEDRVSnrYOLZp' },
    ],
  },
  {
    day: 'Day 2 · October 21',
    title: 'User Panel — Impact of Bridge2AI Datasets for the Research and Industry Community',
    talks: [
      { title: 'Panel Introduction', speakers: 'End User Panel', driveId: '1YDi1hCn1tXCQ5kwMiaKruVvKsgUVhmum' },
      { title: 'Voice Studies', speakers: 'Yann Fossat', driveId: '1tJlS013zlGTDy5jlFmu8m0c1-P401r7J' },
      { title: 'SUD Subtype Ascertainment and Hospital Outcome Prediction', speakers: 'Violet Kimble', driveId: '1UOyk4Nl3IqB4M_MCav9vMXNf3--VNKoV' },
      { title: 'AI Prediction Models to Identify High-Risk Cohorts at Risk of Cancer', speakers: 'Chris Sander', driveId: '1GAFn39EDeadVVeBz4eTp9P965N6wPUg8' },
      { title: 'Which Early Clinical Features Generalize Across Health Systems?', speakers: 'Ria Chaudhry', driveId: '19lcRCmcMCV-fSnkMBZql2OI68Isu8Utg' },
      { title: 'What a Great Time to Be AI-READI!', speakers: 'Bill Chen', driveId: '1JtHTE5HUdKTxQCuhKLX6Ccf8FJZb2J9U' },
      { title: 'Using Bridge2AI Data to Clear the Validation Bar for Clinical Deployment', speakers: 'Timothy Ruchti & Elias Bitar', driveId: '1S3DPN_gt4gD89UYW2JHyc7aNo6hGgkdE' },
      { title: 'Voice, Mood, and the Menopause Transition', speakers: 'Rupal Patel', driveId: '1cHWJ9WuWsLLRU5DT8-Gx_P-xOye_njN0' },
      { title: 'Combining a Clinical Perspective with Advanced Informatics and AI Methods to Transform Large-Scale, Heterogeneous Healthcare Data into Actionable Knowledge', speakers: 'Liwei Wang', driveId: '1g3a2WkUiO5gUC7uT_i0lyBFvtSgEi5tx' },
      { title: 'AI-READI for Ophthalmic AI: Multimodal Imaging, Generalization, and Beyond', speakers: 'Homa Rashidisabet', driveId: '1Y_2r5E2RTFYlk5R5MmYqOd86YQOUd43L' },
    ],
  },
  {
    day: 'Day 2 · October 21',
    title: 'Cross-Cutting Themes',
    talks: [
      { title: 'Ethical, Legal and Social Implications', speakers: 'Brad Malin', driveId: '1jXDgTgIhNbOTTZoNku5gmanZCtoLFqsl' },
      { title: 'Data Indexing and Blockchain', speakers: 'Lucila Ohno-Machado, Hua Xu & Tsung-Ting Kuo', driveId: '1df0xfETdlcYRm_6gAVEK_YCkuUTD_5zE' },
      { title: 'Phenopacketizing Bridge2AI', speakers: 'Justin Reese', driveId: '1UUWLbR7kmObOQ81Jvasr3Nf6VDho_0sK' },
      { title: 'Bridge2AI Talent Knowledge Graph', speakers: 'Jake Chen', driveId: '16GTkkphbDsGoRCwdluJ-61h0fK17ag1p' },
      { title: 'Training, Recruitment and Mentoring', speakers: 'Jack Rincon', driveId: '1IT07c8FNzBshyDBRbiH4fpRBjnszylak' },
    ],
  },
];
