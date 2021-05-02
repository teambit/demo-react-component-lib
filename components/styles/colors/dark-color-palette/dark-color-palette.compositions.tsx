import React from 'react';
import styles from './dark-color-palette.module.scss';

export const Samples = () => {
  return (
    <div className={styles.darkMod}>
      <p style={{ color: 'var(--text-color)' }}>--text-color</p>
      <p style={{ color: 'var(--text-highlight)' }}>--text-highlight</p>
      <p style={{ color: 'var(--text-muted)' }}>--text-muted</p>
      <p style={{ color: 'var(--text-muted-highlight)' }}>
        --text-muted-highlight
      </p>
      <p style={{ color: 'var(--text-inactive)' }}>--text-inactive</p>
      <p style={{ color: 'var(--base-color)' }}>--base-color</p>
      <p style={{ color: 'var(--base-highlight)' }}>--base-highlight</p>
      <p style={{ color: 'var(--border-color)' }}>--border-color</p>
      <p style={{ color: 'var(--muted-highlight)' }}>--muted-highlight</p>
      <p style={{ color: 'var(--error-color)' }}>--error-color</p>
      <p style={{ color: 'var(--error-highlight)' }}>--error-highlight</p>
      <p style={{ color: 'var(--bg-error)' }}>--bg-error</p>
      <p style={{ color: 'var(--bg-bedrock)' }}>--bg-bedrock</p>
      <p style={{ color: 'var(--bg-base)' }}>--bg-base</p>
      <p style={{ color: 'var(--bg-tooltip)' }}>--bg-tooltip</p>
      <p style={{ color: 'var(--bg-layer)' }}>--bg-layer</p>
      <p style={{ color: 'var(--bg-crust)' }}>--bg-crust</p>
      <p style={{ color: 'var(--bg-topping)' }}>--bg-topping</p>
      <p style={{ color: 'var(--bg-topping-highlight)' }}>
        --bg-topping-highlight
      </p>
      <p style={{ color: 'var(--bg-dent)' }}>--bg-dent</p>
    </div>
  );
};
