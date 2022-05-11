import React, { useState } from 'react';
import styles from '../styles/faqs.module.css';
import ButtonStyles from '../styles/button.module.css';

const Faqs = () => {
  return (
    <div style={{ marginTop: 48 }}>
      <h3>Frequently Asked Questions</h3>

      <FaqEntry title="Why are there two sRLY tokens: RLYv2 and sRLY3?">
        <p>
          RLY Network Association was notified of a critical vulnerability in
          its Solana Canonical Swap Program. The non-upgradable nature of the
          Canonical Swap program and this instances irrevocable ownership of
          mint authority over sRLY meant the previous versions of this program
          and the sRLY token needed to be deprecated.
        </p>
        <p>sRLY (deprecated): RLYv2ubRMDLcGG2UyvPmnPmkfuQTsMbg4Jtygc7dmnq</p>
        <p>sRLY (new): sRLY3migNrkC1HLgqotpvi66qGkdNedqPZ9TJpAQhyh sRLY</p>
      </FaqEntry>

      <FaqEntry title="Do I need to swap my RLYv2 token for sRLY3?">
        <p>
          RLY Network Association is committed to rebuilding all functionality
          and supporting all of its users on Solana for the new sRLY3 token.
          Some features and applications may no longer support the RLYv2 token
          so we recommend swapping to sRLY3.
        </p>
      </FaqEntry>

      <FaqEntry title="How do I use this site?">
        <p>1. Swap RLYv2 (deprecated) to sRLY3</p>
        <p>2. Swap Wormhole RLY to sRLY3</p>
      </FaqEntry>

      <FaqEntry title="How do I get Wormhole RLY?">
        <p>Send ERC20 RLY: 0xf1f955016ecbcd7321c7266bccfb96c68ea5e49b</p>
        <p>through the Wormhole bridge to obtain RLY (Wormhole)</p>
        <p>6Y7LNYkHiJHSH8zR2HvZQzXD3QA9yFw64tyMHxBxDRe4</p>
      </FaqEntry>

      <FaqEntry title="Is this site legit?">
        <p>
          This site was created by the RLY Network Association to support users
          to get sRLY. Please view the following resources:
        </p>
        <p>
          <a
            className={ButtonStyles.rly_link_button}
            href="https://github.com/rally-dfs/token-migration-web">
            Source Code
          </a>
        </p>
        <p>
          <a
            className={ButtonStyles.rly_link_button}
            href="https://discord.com/channels/727244969168863316/766044360906244116/970906048334540820">
            Discord
          </a>
        </p>
        <p>
          <a
            className={ButtonStyles.rly_link_button}
            href="https://rly-network.gitbook.io/rly-network/learn-more/faqs">
            RLY Network Documentation Wiki
          </a>
        </p>
      </FaqEntry>
    </div>
  );
};

type FaqEntryProps = {
  title: string;
  children: React.ReactNode;
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
          {expanded ? '-' : '+'}
        </div>
        <div>{props.title}</div>
      </div>
      {expanded && (
        <div className={styles.faq_description}>{props.children}</div>
      )}
    </div>
  );
};

export default Faqs;
