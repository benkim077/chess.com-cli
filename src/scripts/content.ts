// TODO: command line input 만들기
class InputComponent {}

type Position = 'black' | 'white';
const userPosition: Position = 'white';

// TODO: 현재 킹사이드 나이트로 테스트
// TODO: 백을 기준으로 테스트
// const PIECES = [
//   {
//     id: 'KNIGHT_OF_KING_SIDE',
//     dom_obj: document.getElementsByClassName('square-71'),
//   },
// ];

// TODO: 체스말 움직이기 검증
// 말을 움직일 수 있는지 없는지 검증하는 것이 우선
const userInput = 'Nf4';

const BOARD = document.querySelector('.board')! as HTMLElement;
console.log(BOARD);

BOARD.addEventListener('click', () => {
  try {
    simulateClickOn(KNIGHT_OF_KING_SIDE);
  } catch (error) {
    console.error(error);
  }
});

const KNIGHT_OF_KING_SIDE = document.querySelector('.square-71')! as HTMLDivElement;

const start = 'g1';
const end = 'f4';

function simulateClickOn(target: HTMLElement) {
  const endPosition = document.querySelector<HTMLElement>('.hint.square-63');

  if (!endPosition) {
    throw new Error('null');
  }

  const clientRect = endPosition.getBoundingClientRect();
  console.log(clientRect);

  // const event = new MouseEvent('click', {
  //   view: window,
  //   bubbles: true,
  //   cancelable: true,
  //   // clientX: ,
  //   // clientY:,
  // });

  // const cancelled = target.dispatchEvent(event);

  // console.log(cancelled);
}
