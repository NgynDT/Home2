import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./frame.module.css";

const Frame = () => {
  const router = useRouter();

  const onRectangle1Click = useCallback(() => {
    router.push("/ng-nhp");
  }, [router]);

  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.ngK}>ĐĂNG KÍ</div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupChild} onClick={onRectangle1Click} />
        <div className={styles.ngNhp}>ĐĂNG NHẬP</div>
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.groupItem} />
        <div className={styles.cTiKhon}>ĐÃ CÓ TÀI KHOẢN</div>
      </div>
      <div className={styles.groupParent}>
        <div className={styles.groupDiv}>
          <div className={styles.groupItem} />
          <div className={styles.email}>{`Email  `}</div>
        </div>
        <div className={styles.rectangleParent1}>
          <div className={styles.groupItem} />
          <div className={styles.groupChild1} />
          <div className={styles.nhpLiMt}>Nhập lại mật khẩu</div>
          <img
            className={styles.removeRedEye}
            alt=""
            src="/remove-red-eye.svg"
          />
          <div className={styles.mtKhu}>{`Mật khẩu `}</div>
          <img
            className={styles.removeRedEye1}
            alt=""
            src="/remove-red-eye.svg"
          />
        </div>
        <div className={styles.groupItem} />
        <div className={styles.email}>Tên đăng nhập</div>
      </div>
    </div>
  );
};

export default Frame;
