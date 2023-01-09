import React, { useState } from "react";
import style from "./ChatingRoom.module.css";
import ProfileButton from "../../assets/images/profile-none.png";
import imgButton from "../../assets/images/img-button.png";
import imgArrow from "../../assets/images/icon-arrow-left.png";
import imgVertical from "../../assets/images/icon-more-vertical.png";
export default function Chating() {
    const [msg, setMsg] = useState("");
    const [msgList, setMsgList] = useState([]);
    return (
        <section className={style.chat_wrap}>
            <div className={style.cont_navbar}>
                <img src={imgArrow} className={style.img_arrow} />
                <p className={style.nav_txt}>전자제품 농장</p>
                <img src={imgVertical} className={style.img_vertical} />
            </div>

            <div className={style.cont_box}>
                <img className={style.profile_none} src={ProfileButton} />
                <div className={style.cont_txt}>
                    <p className={style.chat_txt}>안녕하세요</p>
                </div>
                <span className={style.chat_time}>00:00</span>
            </div>
            <div className={style.chat_down}>
                {msgList.map((message, i) => (
                    <div
                        key={i}
                        className={`${style.cont_box} ${style.my_msg}`}
                    >
                        <span className={style.chat_time}>00:00</span>
                        <div className={style.cont_blacktxt}>
                            <p className={style.chat_txt}>{message}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className={style.input_div}>
                <img className={style.img_button} src={imgButton} />
                <input
                    type="text"
                    placeholder="메세지를 입력하세요"
                    className={style.inp_txt}
                    value={msg}
                    onChange={(e) => {
                        setMsg(e.target.value);
                    }}
                />
                <button
                    onClick={() => {
                        console.log(msg);
                        setMsgList([...msgList, msg]);
                        setMsg("");
                    }}
                    className={style.btn_submit}
                >
                    전송
                </button>
            </div>
        </section>
    );
}
