import { useState, useCallback } from "react";
import NgNhp from "../components/ng-nhp";
import PortalPopup from "../components/portal-popup";
import styles from "./index.module.css";

const Home = () => {
  const [isNgNhpOpen, setNgNhpOpen] = useState(false);

  const openNgNhp = useCallback(() => {
    setNgNhpOpen(true);
  }, []);

  const closeNgNhp = useCallback(() => {
    setNgNhpOpen(false);
  }, []);

  const onBUTTONContainerClick = useCallback(() => {
    // Please sync "Trang hiển thị sản phẩm" to the project
  }, []);

  return (
    <>
      <a className={styles.home}>
        <div className={styles.header}>
          <div className={styles.headerChild} />
          <div className={styles.logoStore}>
            <img
              className={styles.logoStoreChild}
              alt=""
              src="/rectangle-21@2x.png"
            />
          </div>
          <div className={styles.groupParent}>
            <div className={styles.vectorParent}>
              <img
                className={styles.groupChild}
                alt=""
                src="/rectangle-3.svg"
              />
              <img className={styles.searchIcon} alt="" src="/search.svg" />
              <div className={styles.tmKim}>TÌM KIẾM</div>
            </div>
            <img
              className={styles.userIcon}
              alt=""
              src="/user.svg"
              onClick={openNgNhp}
            />
            <div className={styles.shoppingCart}>
              <img
                className={styles.shoppingCartIcon}
                alt=""
                src="/shoppingcart.svg"
              />
              <div className={styles.ellipseParent}>
                <div className={styles.groupItem} />
                <div className={styles.div}>1</div>
              </div>
            </div>
          </div>
          <div className={styles.navBar}>
            <div className={styles.giCBit}>GIÁ ĐẶC BIỆT</div>
            <div className={styles.qunOParent}>
              <div className={styles.qunO}>QUẦN ÁO</div>
              <img
                className={styles.chevronDownIcon}
                alt=""
                src="/chevrondown.svg"
              />
            </div>
            <div className={styles.oSMi}>ÁO SƠ MI</div>
            <div className={styles.oSMi}>POLO</div>
          </div>
        </div>
        <img className={styles.homeChild} alt="" src="/rectangle-4@2x.png" />
        <div className={styles.vChngTi}>VỀ CHÚNG TÔI</div>
        <div className={styles.vChngTi1}>VỀ CHÚNG TÔI</div>
        <div className={styles.choMngBnContainer}>
          <span>{`Chào mừng bạn đến với `}</span>
          <span className={styles.genz}>GENZ</span>
          <span>
            {" "}
            , điểm đến duy nhất cho thời trang và phụ kiện hàng đầu. Chúng tôi
            cam kết mang đến cho bạn những xu hướng mới nhất, chất lượng xuất
            sắc và trải nghiệm mua sắm đáng nhớ sẽ khiến bạn quay trở lại nhiều
            lần hơn.
          </span>
        </div>
        <div className={styles.homeInner}>
          <img className={styles.groupInner} alt="" src="/rectangle-5@2x.png" />
        </div>
        <div className={styles.listProducts}>
          <div className={styles.listProductsChild} />
          <div className={styles.snPhmMi}>SẢN PHẨM MỚI</div>
          <div className={styles.listProductItems}>
            <div className={styles.itemProducts}>
              <div className={styles.itemProductsChild} />
              <div className={styles.priceName}>
                <div className={styles.lineBoxyRaglan}>
                  LINE BOXY RAGLAN TEE - CREAM
                </div>
                <div className={styles.div1}>380.000₫</div>
              </div>
              <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
            </div>
            <div className={styles.itemProducts1}>
              <div className={styles.itemProductsChild} />
              <div className={styles.priceName}>
                <div className={styles.div1}>LINE BOXY RAGLAN TEE - CREAM</div>
                <div className={styles.div1}>380.000₫</div>
              </div>
              <img
                className={styles.image1Icon}
                alt=""
                src="/image-11@2x.png"
              />
            </div>
            <div className={styles.itemProducts2}>
              <div className={styles.itemProductsChild} />
              <div className={styles.priceName}>
                <div className={styles.div1}>LINE BOXY RAGLAN TEE - CREAM</div>
                <div className={styles.div1}>380.000₫</div>
              </div>
              <img
                className={styles.image1Icon}
                alt=""
                src="/image-12@2x.png"
              />
            </div>
            <div className={styles.button} onClick={onBUTTONContainerClick}>
              <div className={styles.xemTtC}>XEM TẤT CẢ</div>
            </div>
          </div>
        </div>
        <div className={styles.listProductsPants}>
          <div className={styles.listProductsPantsChild} />
          <div className={styles.muQunMi}>MẪU QUẦN MỚI</div>
          <div className={styles.listProductItems1}>
            <div className={styles.itemProducts}>
              <div className={styles.itemProductsChild} />
              <div className={styles.priceName3}>
                <div className={styles.fabricTrackPantsContainer}>
                  <span className={styles.fabricTrackPantsContainer1}>
                    <p className={styles.blankLine}>&nbsp;</p>
                    <p className={styles.blankLine}>FABRIC TRACK PANTS</p>
                  </span>
                </div>
                <div className={styles.div1}>380.000₫</div>
              </div>
              <img
                className={styles.image1Icon}
                alt=""
                src="/image-13@2x.png"
              />
            </div>
            <div className={styles.itemProducts1}>
              <div className={styles.itemProductsChild} />
              <div className={styles.priceName4}>
                <div className={styles.priceName5}>
                  <div className={styles.fabricTrackPantsContainer}>
                    <span className={styles.fabricTrackPantsContainer1}>
                      <p className={styles.blankLine}>&nbsp;</p>
                      <p className={styles.blankLine}>FABRIC TRACK PANTS</p>
                    </span>
                  </div>
                  <div className={styles.div1}>380.000₫</div>
                </div>
              </div>
              <img
                className={styles.image1Icon}
                alt=""
                src="/image-14@2x.png"
              />
            </div>
            <div className={styles.itemProducts2}>
              <div className={styles.itemProductsChild} />
              <div className={styles.priceName4}>
                <div className={styles.priceName5}>
                  <div className={styles.fabricTrackPantsContainer}>
                    <span className={styles.fabricTrackPantsContainer1}>
                      <p className={styles.blankLine}>&nbsp;</p>
                      <p className={styles.blankLine}>FABRIC TRACK PANTS</p>
                    </span>
                  </div>
                  <div className={styles.div1}>380.000₫</div>
                </div>
              </div>
              <img
                className={styles.image1Icon}
                alt=""
                src="/image-15@2x.png"
              />
            </div>
            <div className={styles.button1}>
              <div className={styles.xemTtC}>XEM TẤT CẢ</div>
            </div>
          </div>
        </div>
        <div className={styles.footerParent}>
          <div className={styles.footer} />
          <img
            className={styles.frameChild}
            alt=""
            src="/rectangle-21@2x.png"
          />
          <div className={styles.address}>
            <div className={styles.ngNguynDuQun1ThnhPhParent}>
              <div className={styles.ngNguynDu}>
                123 Đường Nguyễn Du, Quận 1, Thành phố Hồ Chí Minh
              </div>
              <img
                className={styles.clothesIcon}
                alt=""
                src="/clothes@2x.png"
              />
            </div>
            <div className={styles.ngCmt8QunTnBnhThnhParent}>
              <div className={styles.ngNguynDu}>
                456 Đường CMT8, Quận Tân Bình, Thành phố Hồ Chí Minh
              </div>
              <img
                className={styles.clothesIcon}
                alt=""
                src="/clothes1@2x.png"
              />
            </div>
            <div className={styles.linH0969404274Wrapper}>
              <div className={styles.linH0969404274}>
                Liên hệ:
                <span className={styles.span}>0969404274</span>
              </div>
            </div>
            <div className={styles.linHVi}>Liên hệ với chúng tôi</div>
          </div>
          <div className={styles.address1}>
            <div className={styles.vChngTi2}>Về chúng tôi</div>
            <div className={styles.giiThiu}>Giới thiệu</div>
            <div className={styles.hngDnMua}>Hướng dẫn mua hàng</div>
            <div className={styles.chnhSchI}>Chính sách đổi trả</div>
          </div>
          <div className={styles.follow}>
            <div className={styles.theoDiChng}>Theo dõi chúng tôi</div>
            <img
              className={styles.instagramIcon}
              alt=""
              src="/instagram@2x.png"
            />
            <img
              className={styles.facebookIcon}
              alt=""
              src="/facebook@2x.png"
            />
          </div>
        </div>
      </a>
      {isNgNhpOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeNgNhp}
        >
          <NgNhp onClose={closeNgNhp} />
        </PortalPopup>
      )}
    </>
  );
};

export default Home;
