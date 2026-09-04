import { CreditCard, Landmark, ShieldCheck, Wrench, DollarSign, TrendingUp, BarChart, Target, RefreshCw, Clock, FileText, Users, Briefcase, Building2, HandCoins, PiggyBank, Layers, Zap } from 'lucide-react';

export const services = [
  {
    id: 'lines-of-credit',
    title: 'Lines of Credit',
    description: 'Flexible revolving capital you can draw on anytime — perfect for inventory, payroll, or bridging cash flow gaps.',
    icon: CreditCard,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    id: 'bank-term-loans',
    title: 'Bank Term Loans',
    description: 'Fixed, affordable payments backed by banks — ideal for expansion, refinancing, or strategic investment.',
    icon: Landmark,
    color: 'bg-pink-100 text-pink-500',
  },
  {
    id: 'debt-restructuring',
    title: 'Debt Restructuring',
    description: 'Consolidate multiple advances into one simple payment, lower your daily costs, and regain financial stability.',
    icon: Layers,
    color: 'bg-green-100 text-green-600',
  },
  {
    id: 'sba-loans',
    title: 'SBA Loans',
    description: 'Government-backed financing with extended terms and competitive rates for long-term business growth.',
    icon: ShieldCheck,
    color: 'bg-indigo-100 text-navy-900',
  },
  {
    id: 'equipment-financing',
    title: 'Equipment Financing',
    description: 'Acquire or replace essential tools and machinery with up to 100% financing tailored to your budget.',
    icon: Wrench,
    color: 'bg-purple-100 text-purple-600',
  },
  {
    id: 'smarter-mca',
    title: 'Smarter MCA Solution',
    description: 'Replace daily MCA withdrawals with fixed monthly payments built for stability and SBA-ready financing.',
    icon: Zap,
    color: 'bg-amber-100 text-amber-600',
  },
];

export const partners = [
  "SBA", "FDIC", "Fannie Mae", "US Treasury", "CDFI Fund", "Small Business"
];

export const insights = [
  {
    id: 'bakery-sba-7a',
    title: 'How a family bakery secured an $850K SBA 7(a) loan to triple production',
    date: '14 December 2025',
    category: 'SBA 7(a) Loan',
    imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'manufacturing-sba-504',
    title: 'A precision-machining shop bought their building with an SBA 504 — and cut rent by 100%',
    date: '2 November 2025',
    category: 'SBA 504 Loan',
    imageUrl: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'dental-practice-sba-acquisition',
    title: 'A young dentist bought a $1.2M practice with $0 down using an SBA acquisition loan',
    date: '19 September 2025',
    category: 'SBA Acquisition',
    imageUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'logistics-sba-express',
    title: 'A trucking company funded a 6-truck fleet expansion in 21 days with an SBA Express loan',
    date: '7 August 2025',
    category: 'SBA Express',
    imageUrl: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800'
  }
];

export const serviceData = {
  'lines-of-credit': {
    id: 'lines-of-credit',
    layout: 'standard',
    heroTitle: 'Lines of Credit',
    heroDescription: 'Keep your business ready with revolving capital you can use anytime. Stay ahead of cash flow challenges with flexible credit that replenishes as you repay.',
    experienceTitle: 'Flexible funding that grows with you',
    experienceDescription: 'Our lines of credit are designed for businesses that need ongoing access to working capital. Whether you are covering seasonal fluctuations, managing payroll, or seizing unexpected opportunities, a revolving credit line gives you the financial agility to act fast.',
    experienceDescription2: 'Unlike traditional loans, you only pay interest on what you use. As you repay, your available credit replenishes — giving you a perpetual safety net that scales alongside your business.',
    features: [
      { title: 'Revolving Access', description: 'Draw funds as needed and replenish your credit line as you repay. Your capital is always ready when opportunity knocks.', icon: RefreshCw },
      { title: 'Competitive Rates', description: 'Interest-only and prime-plus rates keep your borrowing costs low while maintaining maximum financial flexibility.', icon: DollarSign },
      { title: 'Fast Approval', description: 'Our streamlined process gets you approved quickly so you can focus on running your business, not waiting on paperwork.', icon: Clock }
    ],
    uniqueTitle: 'Capital on your terms',
    uniqueDescription: 'With loan amounts from $25,000 to $1,000,000+ and 12-18 month terms, our lines of credit are built for businesses that need reliable, flexible access to funds without the rigid structure of a traditional loan.',
    uniqueDescription2: 'Perpetually revolving with responsible use, our credit lines reward good financial management with growing access to the capital you need.'
  },
  'bank-term-loans': {
    id: 'bank-term-loans',
    layout: 'process',
    heroTitle: 'Bank Term Loans',
    heroDescription: 'Access the capital you need to grow with fixed, affordable payments. Expand, refinance, or invest with confidence through our bank-backed lending solutions.',
    experienceTitle: 'Predictable payments, proven results',
    experienceDescription: 'Our bank-backed term loans deliver fast approvals, transparent terms, and predictable payments that fit your goals. With loan amounts from $25,000 to $10,000,000+ and interest rates starting at 9%, we connect you with the capital to make big moves.',
    experienceDescription2: 'Whether you are expanding to a new location, purchasing commercial real estate, or refinancing existing debt, our term loans offer the stability and affordability that high-cost alternatives simply cannot match.',
    steps: [
      { number: '01', title: 'Apply Online', description: 'Complete our simple application in minutes. Our technology quickly identifies the best financing options for your needs.' },
      { number: '02', title: 'Compare Options', description: 'Review tailored funding options side-by-side. Take your time to choose the best fit for your business goals and budget.' },
      { number: '03', title: 'Get Funded', description: 'Connect with a dedicated consultant, finalize terms, and receive your capital — often within days, not weeks.' }
    ],
    features: [
      { title: 'Flexible Terms', description: 'Payback terms from 2 to 15 years give you the breathing room to grow without the pressure of short-term repayment schedules.', icon: Clock },
      { title: 'High Loan Amounts', description: 'Secure funding from $25,000 up to $10,000,000+ to tackle projects of any size — from small renovations to major expansions.', icon: BarChart },
      { title: 'Transparent Pricing', description: 'No hidden fees or surprises. Our bank-backed loans come with clear terms and fixed payments you can plan around.', icon: FileText }
    ],
    uniqueTitle: 'Banking relationships that deliver',
    uniqueDescription: 'We maintain deep relationships with a network of banks and lending institutions, allowing us to match your business with the most competitive rates and terms available in the market.',
    uniqueDescription2: 'Our team guides you through every step — from application to funding — ensuring a smooth, transparent process that puts your business goals first.'
  },
  'debt-restructuring': {
    id: 'debt-restructuring',
    layout: 'process',
    heroTitle: 'Debt Restructuring',
    heroDescription: 'Consolidate your debt into one simple payment and free up your cash flow. Simplify your finances and regain control of your business.',
    experienceTitle: 'Simplify, stabilize, and scale',
    experienceDescription: 'If your business is juggling multiple MCA advances or high-cost loans, debt restructuring can consolidate everything into a single, manageable monthly payment. We work with lenders to negotiate better terms that dramatically improve your cash flow.',
    experienceDescription2: 'With funds from $50,000 to $5,000,000+, including factoring and AR-based lines of credit, our restructuring facilities are designed to grow with your business — not hold it back.',
    steps: [
      { number: '01', title: 'Debt Assessment', description: 'We review all your existing obligations — MCAs, loans, and advances — to understand the full picture and identify the best path forward.' },
      { number: '02', title: 'Consolidation Plan', description: 'Our team negotiates with creditors and structures a single, affordable payment plan that replaces your multiple daily or weekly withdrawals.' },
      { number: '03', title: 'Financial Freedom', description: 'With simplified payments and improved cash flow, your business regains the stability needed to qualify for long-term bank financing.' }
    ],
    features: [
      { title: 'Cash Flow Recovery', description: 'Lower your daily payment burden by up to 65%, freeing up capital for operations, hiring, and growth.', icon: TrendingUp },
      { title: 'Single Payment Structure', description: 'Replace multiple daily or weekly MCA withdrawals with one predictable monthly payment you can plan around.', icon: FileText },
      { title: 'Credit Improvement', description: 'Restructuring improves your business credit profile, building a pathway toward SBA and traditional bank financing.', icon: ShieldCheck }
    ],
    uniqueTitle: 'Break free from the MCA cycle',
    uniqueDescription: 'Many business owners feel trapped by stacking MCA advances — each one making the next more expensive. Our restructuring programs are specifically designed to break this cycle and put you back on solid financial ground.',
    uniqueDescription2: 'We don\'t just reduce your payments. We create a strategic roadmap from restructuring to bank-grade financing, ensuring your business moves from survival mode to sustainable growth.'
  },
  'sba-loans': {
    id: 'sba-loans',
    layout: 'feature-rows',
    heroTitle: 'SBA Loans',
    heroDescription: 'Secure long-term, low-rate funding backed by the U.S. Small Business Administration. Perfect for expansion, refinancing, or working capital with guidance every step of the way.',
    experienceTitle: 'Government-backed confidence',
    experienceDescription: 'SBA loans offer some of the most favorable terms available to small businesses — extended repayment periods of 10 to 25 years, competitive interest rates from 10.25% to 16%, and loan amounts from $50,000 to $5,000,000.',
    experienceDescription2: 'Our experienced team navigates the SBA application process for you, handling the complexity so you can focus on your business. We have successfully guided hundreds of businesses through SBA 7(a) and 504 loan programs.',
    features: [
      { title: 'Extended Repayment Terms', description: 'With repayment terms of 10 to 25 years, SBA loans offer the lowest monthly payments of any business financing option available.', icon: Clock },
      { title: 'Competitive Interest Rates', description: 'Government backing means lenders can offer rates from 10.25% to 16% — significantly lower than most alternative lending products.', icon: TrendingUp },
      { title: 'Versatile Use of Funds', description: 'Use SBA loan proceeds for working capital, equipment, real estate, debt refinancing, or virtually any legitimate business purpose.', icon: Briefcase }
    ],
    uniqueTitle: 'Your path to SBA funding',
    uniqueDescription: 'Many businesses think SBA loans are out of reach due to complex requirements. We simplify the process by pre-qualifying your business, preparing documentation, and matching you with the right SBA lender.',
    uniqueDescription2: 'For businesses currently burdened by high-cost MCA debt, we offer a proven pathway: restructure your existing obligations first, build your financial foundation, then transition to long-term SBA financing for sustainable growth.'
  },
  'equipment-financing': {
    id: 'equipment-financing',
    layout: 'impact',
    heroTitle: 'Equipment Financing',
    heroDescription: 'Upgrade your equipment without slowing down your cash flow. Acquire or replace essential tools and machinery with up to 100% financing and terms tailored to your budget.',
    experienceTitle: 'Keep operations moving forward',
    experienceDescription: 'Whether you need commercial vehicles, manufacturing machinery, restaurant equipment, or technology infrastructure, our equipment financing solutions let you acquire what you need without depleting your working capital.',
    experienceDescription2: 'With loan amounts up to $2,000,000+, repayment terms from 4 to 84 months, and offers of up to 100% financing, we make it simple to invest in the tools that drive your business forward.',
    stats: [
      { label: 'Max Financing', value: '100%' },
      { label: 'Funding Up To', value: '$2M+' },
      { label: 'Terms Up To', value: '84mo' }
    ],
    features: [
      { title: 'Preserve Working Capital', description: 'Finance up to 100% of your equipment cost, keeping your cash reserves intact for daily operations and unexpected expenses.', icon: PiggyBank },
      { title: 'Flexible Repayment', description: 'Choose terms from 4 to 84 months to align your payments with the equipment\'s useful life and your cash flow cycle.', icon: RefreshCw },
      { title: 'Fast Processing', description: 'Our streamlined application process means you can get approved and funded quickly — so your new equipment is working for you sooner.', icon: Clock }
    ],
    uniqueTitle: 'Equipment as collateral',
    uniqueDescription: 'Unlike unsecured loans, equipment financing uses the asset itself as collateral — often resulting in better rates and higher approval chances, even for newer businesses.',
    uniqueDescription2: 'From heavy machinery to point-of-sale systems, we finance equipment across every industry. Our specialists match you with the right lender and structure to maximize your investment.'
  },
  'smarter-mca': {
    id: 'smarter-mca',
    layout: 'impact',
    heroTitle: 'Smarter MCA Solution',
    heroDescription: 'Replace daily MCA withdrawals with fixed monthly payments built for stability. Refinance expensive MCA debt into affordable, structured payments that rebuild your financial foundation.',
    experienceTitle: 'From daily drain to monthly stability',
    experienceDescription: 'Our Smarter MCA Solution is designed specifically for businesses trapped in expensive merchant cash advance cycles. We replace unpredictable daily withdrawals with fixed, affordable monthly payments — giving you back control of your cash flow.',
    experienceDescription2: 'With up to $150,000 funded in as little as 72 hours, a minimum 640 credit score, and 12+ months in business, this program is the fastest path from MCA debt to SBA-ready financing.',
    stats: [
      { label: 'Funded In', value: '72hrs' },
      { label: 'Up To', value: '$150K' },
      { label: 'Min Credit', value: '640' }
    ],
    features: [
      { title: 'Fixed Monthly Payments', description: 'No more unpredictable daily or weekly withdrawals. Our fixed monthly structure lets you plan your finances with certainty.', icon: FileText },
      { title: 'SBA-Ready Path', description: 'Designed to improve your financial profile and build the foundation needed to qualify for long-term SBA financing.', icon: ShieldCheck },
      { title: 'Fast Funding', description: 'Get up to $150,000 funded in as little as 72 hours — because when you are escaping MCA debt, speed matters.', icon: Clock }
    ],
    uniqueTitle: 'Your bridge to better financing',
    uniqueDescription: 'Most businesses don\'t start with MCAs by choice — they turn to them out of necessity. The Smarter MCA Solution recognizes this reality and provides a dignified, strategic exit from high-cost advances.',
    uniqueDescription2: 'We don\'t just refinance your debt. We create a clear pathway from your current MCA obligations to affordable bank financing and eventually to SBA loans — the gold standard of small business lending.'
  }
};

export const insightData = {
  'bakery-sba-7a': {
    id: 'bakery-sba-7a',
    title: 'How a family bakery secured an $850K SBA 7(a) loan to triple production',
    date: '14 December 2025',
    category: 'SBA 7(a) Loan',
    imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800',
    content: {
      introduction: "After eleven years running a beloved neighborhood bakery in Austin, the Reyes family had outgrown their 900 sq. ft. storefront. Wholesale orders from local cafés were piling up faster than they could fulfill — but every conventional bank told them they needed real estate or 30% equity to fund the build-out. The SBA 7(a) program, paired with the right lender, changed the math.",
      sections: [
        {
          heading: "The Challenge: Big demand, no path to scale",
          body: "The Reyes' had $1.4M in trailing-12 revenue and 26% net margins, but only $40K in liquid cash. They needed an $850,000 build-out across a new 4,500 sq. ft. commissary kitchen — equipment, leasehold improvements, and 6 months of working capital. Three local banks declined: 'too much project, too little collateral.'"
        },
        {
          heading: "The Solution: SBA 7(a) at 10.75% over 10 years",
          body: "Prosperity Funding packaged a 7(a) application with the 10% equity injection coming from a pledged 401(k) rollover, a thorough use-of-proceeds breakdown, and signed wholesale LOIs as supporting projections. We placed the deal with a Preferred SBA lender who cleared underwriting in 23 days. The resulting structure: $850K at Prime + 2.25%, fully amortizing over 10 years with the first 6 months interest-only."
        },
        {
          heading: "The Result: 3x output, 14 new jobs",
          body: "Eight months after funding, the Reyes' commissary is producing 3.2x their old volume. They've onboarded 14 employees, opened wholesale lines with two grocery chains, and are already cash-flow positive on the new facility. Monthly debt service runs at 1.78x DSCR — well above the SBA's 1.20x floor."
        }
      ],
      conclusion: "The Reyes family's story is a textbook 7(a) win — strong unit economics, a clear growth thesis, and a lender who understood the food-service space. Prosperity Funding doesn't just process SBA paperwork; we structure deals so banks say yes."
    }
  },
  'manufacturing-sba-504': {
    id: 'manufacturing-sba-504',
    title: 'A precision-machining shop bought their building with an SBA 504 — and cut rent by 100%',
    date: '2 November 2025',
    category: 'SBA 504 Loan',
    imageUrl: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800',
    content: {
      introduction: "Northstar Precision had been leasing a 12,000 sq. ft. industrial building outside Cleveland for nine years. When their landlord listed the property for sale, owner Marcus K. faced a choice: scramble to relocate, or buy the building himself. With $36K/month going to rent and a balance sheet that wasn't 'bank-ready', the SBA 504 program made owning the building cheaper than renting it.",
      sections: [
        {
          heading: "The Challenge: $1.85M purchase, only $185K available",
          body: "Northstar had strong revenue ($4.2M) and EBITDA ($620K), but Marcus had personally pledged most of his liquid assets across two equipment leases. Conventional commercial real estate loans wanted 25-30% down — roughly $463K to $555K. He had $185K. Walking away meant losing nine years of tenant improvements and a perfect location next to two of his biggest customers."
        },
        {
          heading: "The Solution: SBA 504 with 10% down, 25-year term",
          body: "Prosperity Funding structured a classic 504: 50% from a participating bank ($925K, 25-year amortization), 40% from a Certified Development Company ($740K, fixed at 6.18% for 25 years), and 10% from Marcus ($185K). Total monthly payment came in at $11,400 — versus the $36,000/month he was paying in rent."
        },
        {
          heading: "The Result: $24,600/month back into the business",
          body: "Closed in 71 days. Marcus immediately redirected the $24,600/month savings into two new 5-axis CNC machines (financed through our equipment program) and hired a quality-control engineer. Northstar's gross margin jumped 4.1 points in the first quarter post-purchase, and the building is appraising 11% above purchase price."
        }
      ],
      conclusion: "\"Nobody told me owning my building could be cheaper than renting it. Prosperity Funding did the math, found the lender, and closed it in under 90 days.\" — Marcus K., Owner, Northstar Precision"
    }
  },
  'dental-practice-sba-acquisition': {
    id: 'dental-practice-sba-acquisition',
    title: 'A young dentist bought a $1.2M practice with $0 down using an SBA acquisition loan',
    date: '19 September 2025',
    category: 'SBA Acquisition',
    imageUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800',
    content: {
      introduction: "Dr. Priya S. had spent four years as an associate dentist saving toward owning her own practice. When her mentor announced retirement and offered her his $1.2M, two-chair practice in suburban Phoenix, the timing was perfect — except for one detail: she had $42K in personal savings and $138K in student loans. Most lenders laughed her out of the room. The SBA didn't.",
      sections: [
        {
          heading: "The Challenge: Generational opportunity, generational debt",
          body: "Practice acquisitions are notoriously difficult for newer professionals — strong cash flow but no operating history, plus heavy student debt. Dr. S. needed full purchase price plus $80K of working capital to cover transition costs and initial payroll. Two banks pre-declined the deal at the conversation stage."
        },
        {
          heading: "The Solution: SBA 7(a) acquisition with seller carry",
          body: "Prosperity Funding structured a $1.28M SBA 7(a) loan covering 90% of the purchase price plus working capital. The remaining 10% equity injection came from a 5% standby seller note (which counts toward SBA equity requirements when properly structured) and 5% from Dr. S.'s savings. Net out-of-pocket cash at closing: $0. Term: 10 years at Prime + 2.75%, with the practice's existing cash flow comfortably covering 1.94x DSCR."
        },
        {
          heading: "The Result: Practice owner at 31, growing 22% YoY",
          body: "Eleven months in, Dr. S. has retained 96% of the prior owner's patients, added a third operatory, and grown collections 22% by extending hours and adding implant services. She's already prepaying principal and on track to refinance into conventional financing within four years."
        }
      ],
      conclusion: "Practice acquisitions and partner buy-ins are some of the SBA's strongest use-cases — predictable cash flow, intangible goodwill, and motivated sellers. Prosperity Funding closes 30+ professional acquisitions a year using exactly this playbook."
    }
  },
  'logistics-sba-express': {
    id: 'logistics-sba-express',
    title: 'A trucking company funded a 6-truck fleet expansion in 21 days with an SBA Express loan',
    date: '7 August 2025',
    category: 'SBA Express',
    imageUrl: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800',
    content: {
      introduction: "Mid-Atlantic Freight had a problem most owners would envy: too many contracts. A dedicated lane with a Tier-1 retailer required them to add six tractors within 60 days or lose the route. Standard SBA 7(a) would take 45-60 days minimum. They needed money fast — without paying MCA-rates for it.",
      sections: [
        {
          heading: "The Challenge: 60-day window, eight-figure contract on the line",
          body: "Owner Devin R. had quotes for six used Class-8 tractors at $87K each — $522K total. He'd already pulled $90K from working capital to make a deposit and couldn't risk depleting reserves further. Traditional SBA timelines wouldn't beat the deadline. Equipment financing alone wouldn't cover the $50K of working capital he'd need for fuel, drivers, and insurance during ramp-up."
        },
        {
          heading: "The Solution: SBA Express + equipment financing combo",
          body: "Prosperity Funding paired a $350,000 SBA Express loan (delegated authority — 36-hour SBA decisioning) for working capital and soft costs with a $172K equipment financing facility for two of the tractors, leveraging the dedicated retailer contract as supporting cash-flow evidence. SBA Express closed in 19 days. Equipment finance closed in 6. Total time from kickoff to wheels-on-the-road: 21 days."
        },
        {
          heading: "The Result: New lane live, $4.1M of incremental annual revenue",
          body: "All six trucks were operational before the contract deadline. The new lane added $4.1M in annualized revenue at 18% gross margin. Devin has since returned for a $250K SBA-backed line of credit to smooth seasonal cash flow, and his fleet is now 31 trucks strong."
        }
      ],
      conclusion: "When the clock matters, SBA Express delivers. Prosperity Funding's pre-built SBA Express playbook routinely closes deals in under 30 days — without the ugly rates and daily withdrawals of MCA money."
    }
  }
};
