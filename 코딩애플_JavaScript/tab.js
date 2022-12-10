// 버튼0 누르면 orange 클래스명 추가
// 모든 버튼에 붙은 orange클래스명 추가
// div0에 show클래스명 추가
// 모든 div에 붙은 show 클래스명 제거

var 버튼 = $(".tab-button");
버튼.eq(0).on("click", function () {
    버튼.removeClass("orange");
    버튼.eq(0).addClass("orange");
    $(".tab-content").removeClass("show");
    $(".tab-content").eq(0).addClass("show");
});

// for 반복문 쓰는 법 -> 코드를 반복실행해주는구나
// fot (복붙 횟수 ex)var i=0; 1<3; 1++){
// 복붙 코드
// }

for (let i = 0; i < 3; i++) {
    버튼.eq(i).on("click", function () {
        버튼.removeClass("orange");
        버튼.eq(i).addClass("orange");
        $(".tab-content").removeClass("show");
        $(".tab-content").eq(i).addClass("show");
    });
}

// 이벤트 버블링 : 관련 태그를 눌렀을 때 연결된 상위 태그까지 연결되는 것
// 만약 function(e); -> 괄호 안에 e를 넣었어
// e.target; 유저가 실제로 누른 부분의 코드가 뜸
// 문제 : 까만 배경을 누르면 창 닫히게 해줘

document
    .querySelector("까만배경 클래스")
    .addEventListener("click", function (e) {
        if (e.target === document.querySelector("까만배경 클래스")) {
            document.querySelector(".black-bg").classList.remove("show-modal");
        }
    });
// e.currentTarget; this 이벤트리스너 달린 곳을 알려줌
// e.preventDefault(); 이벤트 기본동작 막아줌 = 클릭 안한 것처럼 보여줌
// 예를 들어서 submit 눌렀으면 submit 실행 안되게 해줌
// e.stopPropagation(); 내 상위요소로 이벤트 버블링 막아줌
