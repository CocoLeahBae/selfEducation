import React from "react";
import style from "./ChatingList.module.css";
import ProfileButton from "../../assets/images/profile-none.png";

export default function ChatingList() {
    return (
        <section className={style.cont_chatlist}>
            <div className={style.userprofile}>
                <img className={style.img_profile} src={ProfileButton} />
                <p className={style.profile_name}>
                    전자제품 농장
                    <div className={style.cont_span}>
                        <span className={style.profile_chat}>
                            이번엔 어떤 제품이 나왔나요?
                        </span>
                        <span className={style.profile_date}>2020.10.25</span>
                    </div>
                </p>
            </div>
            <div className={style.userprofile}>
                <img className={style.img_profile} src={ProfileButton} />
                <p className={style.profile_name}>
                    전자제품 농장
                    <div className={style.cont_span}>
                        <span className={style.profile_chat}>
                            이번엔 어떤 제품이 나왔나요?
                        </span>
                        <span className={style.profile_date}>2020.10.25</span>
                    </div>
                </p>
            </div>
        </section>
    );
}
