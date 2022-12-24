import React from "react";
import style from "./ChatingRoom.module.css";
import ProfileButton from "../../assets/images/profile-none.png";
import imgButton from "../../assets/images/img-button.png";
import imgArrow from "../../assets/images/icon-arrow-left.png";
import imgVertical from "../../assets/images/icon-more-vertical.png";

export default function chating() {
    const Chat = (function () {
        const myName = "blue";

        // init 함수
        function init() {
            // enter 키 이벤트
            $(document).on("keydown", "div.input-div textarea", function (e) {
                if (e.keyCode == 13 && !e.shiftKey) {
                    e.preventDefault();
                    const message = $(this).val();

                    // 메시지 전송
                    sendMessage(message);
                    // 입력창 clear
                    clearTextarea();
                }
            });
        }

        // 메세지 태그 생성
        function createMessageTag(LR_className, senderName, message) {
            // 형식 가져오기
            let chatLi = $("div.chat.format ul li").clone();

            // 값 채우기
            chatLi.addClass(LR_className);
            chatLi.find(".sender span").text(senderName);
            chatLi.find(".message span").text(message);

            return chatLi;
        }

        // 메세지 태그 append
        function appendMessageTag(LR_className, senderName, message) {
            const chatLi = createMessageTag(LR_className, senderName, message);

            $("div.chat:not(.format) ul").append(chatLi);

            // 스크롤바 아래 고정
            $("div.chat").scrollTop($("div.chat").prop("scrollHeight"));
        }

        // 메세지 전송
        function sendMessage(message) {
            // 서버에 전송하는 코드로 후에 대체
            const data = {
                senderName: "blue",
                message: message,
            };

            // 통신하는 기능이 없으므로 여기서 receive
            resive(data);
        }

        // 메세지 입력박스 내용 지우기
        function clearTextarea() {
            $("div.input-div textarea").val("");
        }

        // 메세지 수신
        function resive(data) {
            const LR = data.senderName != myName ? "left" : "right";
            appendMessageTag("right", data.senderName, data.message);
        }

        return {
            init: init,
        };
    })();

    $(function () {
        Chat.init();
    });

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
                        <div className={style.cont_wrap}>
                            <span className={style.chat_time}>00:00</span>
                            <div className={style.message}>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Id delectus deserunt explicabo
                                voluptatum nulla molestiae? Itaque, consequuntur
                                vitae porro magnam deserunt quod similique ea
                                doloremque autem, laboriosam, magni repellendus
                                corrupti?
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className={style.input_div}>
                <img className={style.img_button} src={imgButton} />
                <input
                    type="text"
                    placeholder="메세지를 입력하세요"
                    className={style.inp_txt}
                />
                <input
                    type="submit"
                    value="전송"
                    className={style.btn_submit}
                />
            </div>
        </section>
    );
}
