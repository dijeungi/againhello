'use client';

import styles from './page.module.css';

const UnsavedChangesModal: React.FC<UnsavedChangesModalProps> = ({ onClose, onExit }) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.content}
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialogTitle"
        aria-description="dialogDesc"
        tabIndex={-1}
      >
        <h2 className={styles.title}>캐릭터 설정 내용이 저장되지 않았어요 ❌</h2>
        <p className={styles.description}>
          임시저장하지 않으면
          <br />
          현재 만들고 있는 캐릭터 설정 내용은 사라져요.
        </p>
        <div className={styles.buttonGroup}>
          <button className={styles.cancelButton} onClick={onClose}>
            취소
          </button>
          <button className={styles.confirmButton} onClick={onExit}>
            나가기
          </button>
        </div>
      </div>
    </div>
  );
};

export default UnsavedChangesModal;
