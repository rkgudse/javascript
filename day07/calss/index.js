//  int, float, str, bool -> struct [구조체] ->  obj [구조체 + 함수] or class [구조체 + 함수] [=2015]

// dog
// 구조체: 색깔, 크기, 종, 나이 [명사, 상태]
// 함수: 멍멍 짖기 , 잠자기, 밥먹기 [동작, 동작]

// 강아지 키우기 게임
// 구조체: 레벨, 배고픔상태, 체력, 상태, 행복도
// 함수: 밥먹기, 레벨업하기, 잠자기 ...

// 펫보험 강아지 사이트
// 구조체[멤버 변수]: 나이, 보험이력, 수술이력, 중성화상태,
// 함수[멤버 함수]: 종합상태출력하기, 수명예상도출력하기,....



// this -> 자기 클래스를 지칭하는 연산자
class dog{
    constructor(level, hp, happiness){ //생성자임 xyz로하지만() 이거로
        this.level = level;
        this.hp = hp; //300맥시멈이라면?
        this.happiness = happiness;
        this.state = '보통'
        this.foodList = {
            '🍙' : 20,


        }
    }

    // 함수(메소드)를 쓰는 이유는 데이터 보호를 위해서임(캡슐화)
    eating(food){
        const stamina = this.foodList[food] || 5
        this.hp += stamina
        // this.hp += 10;
    }
}
// 결과 : yujin.eating(🍙) -> hp가 상승함


// yujin :인스턴스라고함
const yujin = new dog(3, 200, 100)
const jin = new dog(1, 70, 50)


// super. :바로 위를 가져옴