import React, { useState } from 'react';
import styles from '../styles/faqs.module.css';

const Faqs = () => {
  return (
    <div style={{ marginTop: 48 }}>
      <h3>Frequently Asked Questions</h3>

      <FaqEntry
        title="Why do I need to convert my tokens"
        description="Because we accidentally fucked up"
      />

      <FaqEntry
        title="Is this site legit?"
        description="We think so, it's built by the rally network team. You can verify the SSL cert and checkout the source code on Github"
      />
    </div>
  );
};

type FaqEntryProps = {
  title: string;
  description: string;
};
const FaqEntry = (props: FaqEntryProps) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      className={styles.faq_container}
      onClick={() => {
        setExpanded(!expanded);
      }}>
      <div className={styles.faq_title + ' d-flex ai-center'}>
        <div className={styles.faq_expand_indicator}>
          {expanded ? '⯆' : '⯈'}
        </div>
        <div>{props.title}</div>
      </div>
      {expanded && (
        <div className={styles.faq_description}>{props.description}</div>
      )}
    </div>
  );
};

export default Faqs;
