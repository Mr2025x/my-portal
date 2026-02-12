// app/components/TarotCard.tsx
import styles from './TarotCard.module.css';
import Image from 'next/image';

type Props = {
  href: string;               // 点击后跳转的链接
  frontImage: string;        // 正面图片路径（放在 public 下，例如 "/tarot/1-front.jpg"）
  backImage?: string;        // 背面背景图（可选）
  title: string;
  description: string;
};

export default function TarotCard({
  href,
  frontImage,
  backImage,
  title,
  description,
}: Props) {
  return (
    <div className={styles.container}>
      <a href={href} target="_blank" rel="noopener noreferrer" className={styles.card}>
        <div
          className={styles.front}
          style={{ backgroundImage: `url(${frontImage})` }}
        />
        <div
          className={styles.back}
          style={backImage ? { backgroundImage: `url(${backImage})` } : {}}
        >
          <h3>{title}</h3>
          <p>{description}</p>
          <div className={styles.visitHint}>🔮 点击占卜 · 立即前往</div>
        </div>
      </a>
    </div>
  );
}