"use client"
import { useState } from 'react';

const faqs = [
  {
    q: 'How long does it take to receive my furniture?',
    a: 'Our standard lead time is 6–10 weeks from order confirmation. Complex custom pieces may take longer. We will give you a precise timeline at the time of order.',
  },
  {
    q: 'Can I customise dimensions?',
    a: 'Yes. All our furniture is made to your specifications. We can adjust dimensions, wood species, finish, and fabric to suit your space.',
  },
  {
    q: 'What wood do you use?',
    a: 'We primarily work with solid teak, walnut, and oak — premium hardwoods chosen for their durability and beauty.',
  },
  {
    q: 'Do you deliver outside Bengaluru?',
    a: 'We currently deliver within Bengaluru only. For outstation enquiries, please contact us at bespokebypelican@gmail.com',
  },
  {
    q: 'Can I visit your showroom?',
    a: 'Yes. We have two experience centres in Bengaluru — at Kudlu (HSR Extension) and Mekhri Circle. We recommend calling ahead to schedule a visit.',
  },
  {
    q: 'What is your payment process?',
    a: '50% deposit is required to begin production. The remaining balance is due before delivery.',
  },
  {
    q: 'Do you offer installation?',
    a: 'Yes, installation is included for all Bengaluru deliveries at no extra charge.',
  },
  {
    q: 'How do I place an order?',
    a: 'Fill out our contact form, call us at 1800-833-0046, or visit one of our showrooms. Our team will guide you through the entire process.',
  },
];

const montserrat = { fontFamily: "'Montserrat', sans-serif" } as React.CSSProperties;

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div>
      {faqs.map((faq, i) => (
        <div
          key={i}
          style={{ borderBottom: '1px solid #E0DBD5' }}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '20px 0',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left',
              gap: '16px',
            }}
          >
            <span style={{ ...montserrat, fontSize: '15px', color: '#1A1A1A', fontWeight: 500, letterSpacing: '0.01em', lineHeight: 1.6 }}>
              {faq.q}
            </span>
            <span style={{ color: '#C9A96E', fontSize: '22px', lineHeight: 1, flexShrink: 0, fontWeight: 300 }}>
              {open === i ? '−' : '+'}
            </span>
          </button>
          {open === i && (
            <p style={{ ...montserrat, fontSize: '14px', color: '#6B6560', lineHeight: 1.9, letterSpacing: '0.01em', paddingBottom: '20px', margin: 0 }}>
              {faq.a}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
