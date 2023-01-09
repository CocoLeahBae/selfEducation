import React, { useState } from "react";
import style from "./ChatingRoom.module.css";
import ProfileButton from "../../assets/images/profile-none.png";
import imgButton from "../../assets/images/img-button.png";
import imgArrow from "../../assets/images/icon-arrow-left.png";
import imgVertical from "../../assets/images/icon-more-vertical.png";

export default function Chating() {
    // const [입력값] = useState("");
    // 변수명, 변수를 변경시켜주는 함수
    // 상태를 변경할 땐 직접 변경하지 않습니다!!!
    const [msg, setMsg] = useState("");
    const [msgList, setMsgList] = useState([]);
    // const chatList = msgList.map((item, i) => (
    //   <div key={i} className={style.cont_wrap}>
    //     <span className={style.chat_time}>00:00</span>
    //     <div className={style.message}>{item}</div>
    //   </div>
    // ));

    // 숙제
    // 1. 내가 보낸 메시지 오른쪽으로 붙게 수정
    // 2. 메시지가 특정 height를 넘겼을 때 스크롤생기게 하기
    // 3. 'msg'를 사용해서 버튼의 스타일(활성화)을 바꿔보세요. 힌트 : "리액트 조건부클래스" 검색
    // 완전 나중에 : <div className={style.cont_wrap}>를 <li>로 바꾸기 -> html
    // [완전 999999순위]이미지 업로드는 안하기로,,, 힌트 : js 이미지 미리보기 fileReader

    return (
        <section className={style.chat_wrap}>
            <div className={style.cont_navbar}>
                <img src={imgArrow} className={style.img_arrow} />
                <p className={style.nav_txt}>전자제품 농장</p>
                <img src={imgVertical} className={style.img_vertical} />
            </div>
            <div className={style.chat}>
                <ul>
                    <li>
                        <div className={style.cont_wrap}>
                            <img
                                className={style.profile_none}
                                src={ProfileButton}
                            />
                            <div className={style.sender}>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Mollitia expedita ut nulla
                                necessitatibus voluptatibus, cum reprehenderit
                                eaque dolorum nobis illo omnis ipsam aliquid
                                quod, quia labore. Natus nemo iure quibusdam.
                            </div>
                            <span className={style.chat_time}>00:00</span>
                        </div>
                        <div className={style.cont_wrap}>
                            <img
                                className={style.profile_none}
                                src={ProfileButton}
                            />
                            <div className={style.sender}>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Mollitia expedita ut nulla
                                necessitatibus voluptatibus, cum reprehenderit
                                eaque dolorum nobis illo omnis ipsam aliquid
                                quod, quia labore. Natus nemo iure quibusdam.
                            </div>
                            <span className={style.chat_time}>00:00</span>
                        </div>
                        {/* <div className={style.cont_wrap}>
                <span className={style.chat_time}>00:00</span>
                <div className={style.message}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                delectus deserunt explicabo voluptatum nulla molestiae? Itaque,
                consequuntur vitae porro magnam deserunt quod similique ea
                doloremque autem, laboriosam, magni repellendus corrupti?
                </div>
            </div> */}
                        {/* ["안녕", "나는", "00이야"]
                         * 순회? 반복문! -> ??? for, forEach,
                         * 매핑!! -> 순회를 돌면서 어떤 값을 매핑해주는 것! map!
                         *
                         */}
                        {/* msgList : ["a", "b", "c"] // 0, 1, 2
                const test = msgList.map((item, index) => item+"!");
                0 : a => a!
                1 : b => b!
                2 : c => c!
            */}
                        {msgList.map((message, i) => (
                            // key를 꼭 넣는다! 근데 다른 요소들과 중복되면 안된다.
                            // 원래 :  msgList : ["a", "b", "c"] -> 새로운 배열 : ["<div key=1>", "<div key=2>", "<div key=3>"]
                            // {<div></div><div></div><div></div>}
                            <div key={i} className={style.cont_wrap}>
                                <span className={style.chat_time}>00:00</span>
                                <div className={style.message}>{message}</div>
                            </div>
                        ))}
                    </li>
                </ul>
            </div>
            <div className={style.input_div}>
                <img className={style.img_button} src={imgButton} />
                <input
                    type="text"
                    placeholder="메세지를 입력하세요"
                    className={style.inp_txt}
                    value={msg}
                    onChange={(e) => {
                        // console.log(e.target.value);
                        setMsg(e.target.value);
                    }}
                />
                <button
                    onClick={() => {
                        console.log(msg);
                        setMsgList([...msgList, msg]); // 구조분해할당  msgList [1, 2, 3] => ...msgList == 1, 2, 3
                        // 초기화 작업 -> 전송 버튼을 눌렀을 때 input 창을 초기화 해주기 위한 작업
                        setMsg(""); // 상태는 직접 변경 X, 그래서 setMsg 함수를 사용해서 빈 문자열로 변경
                    }}
                    className={style.btn_submit}
                >
                    전송
                </button>
            </div>
        </section>
    );
}
