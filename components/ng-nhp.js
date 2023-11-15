import { useState, useCallback } from "react";
import Frame from "./frame";
import PortalPopup from "./portal-popup";
import { useRouter } from "next/router";
import styles from "./ng-nhp.module.css";

const NgNhp = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);
  const router = useRouter();

  const onRectangle4Click = useCallback(() => {
    router.push("/");
  }, [router]);

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  return (
    <>
      <div className={styles.ngNhp}>
        <div className={styles.rectangleParent}>
          <img className={styles.frameChild} alt="" src="/rectangle-2@2x.png" />
          <div className={styles.phongCchL}>
            Phong cách là cách bạn thể hiện bản thân
          </div>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameItem} />
          <div className={styles.rectangleContainer}>
            <div className={styles.groupChild} />
            <div className={styles.ghiNhNg}>Ghi nhớ đăng nhập</div>
          </div>
          <div className={styles.qunMtKhu}>Quên mật khẩu</div>
          <div className={styles.groupDiv}>
            <div className={styles.groupItem} />
            <div className={styles.tnNgNhp}>Tên đăng nhập</div>
          </div>
          <div className={styles.rectangleParent1}>
            <div className={styles.groupItem} />
            <div className={styles.mtKhu}>{`Mật khẩu `}</div>
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          </div>
          <div className={styles.rectangleParent2}>
            <div className={styles.rectangleDiv} onClick={onRectangle4Click} />
            <div className={styles.ngNhp1}>Đăng nhập</div>
          </div>
          <div className={styles.rectangleParent3} onClick={openFrame}>
            <div className={styles.groupItem} />
            <div className={styles.toTiKhon}>Tạo tài khoản</div>
          </div>
          <img
            className={styles.removeRedEye}
            alt=""
            src="/remove-red-eye1.svg"
          />
          <div className={styles.ngNhpWrapper}>
            <div className={styles.ngNhp2}>ĐĂNG NHẬP</div>
          </div>
        </div>
      </div>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <Frame onClose={closeFrame} />
        </PortalPopup>
      )}
    </>
  );
};

export default NgNhp;
