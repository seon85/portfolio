'use client';
import React from 'react';
import styles from '@/styles/style.module.scss';
import Link from 'next/link';

export default function index({ index, title, href, manageModal }) {
  return (
    <div
      onMouseEnter={e => {
        manageModal(true, index, e.clientX, e.clientY);
      }}
      onMouseLeave={e => {
        manageModal(false, index, e.clientX, e.clientY);
      }}
      className={styles.project}>
      <Link href={href} target="_blank" title="새창으로 열림">
        <h2>{title}</h2>
        <p>HTML & UI Development</p>
      </Link>
    </div>
  );
}
