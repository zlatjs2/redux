# Redux

## Basic

### action
- __무언가 일어난다__는 사실을 기술__
- 애플리케이션에서 스토어로 보내는 데이터 묶음
- 스토어의 유일한 정보원
- store.dispatch()를 통해 보낼수 있음
- 액션은 반드시 type 속성을 가져야 함(일반적으로 문자열 상수로 정의)

```
/*
 * actions.js (액션 타입)
 */
export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';

export function addTodo(text) {
	return { type: ADD_TODO, text }
}

export function completeTodo(index) {
	return { type: COMPLETE_TODO, index }
}
```

### reducer
- __상태가 어떻게 변하는지__ 명시
- 이전 상태와 액션을 받아서 다음 상태를 반환하는 __순수 함수__

	```
	(previousState, action) => newState
	```
- 절대로 하지 말아야 할 것
	- 인수들을 변경(mutate)
	- API 호출이나 라우팅 전환같은 사이드이펙트 일으키기
	- Date.now()나 Math.random() 같이 순수하지 않은 함수 호출
- __인수가 주어지면, 다음 상태를 계산해서 반환. 변경도 안되고 오로지 계산만 가능__
- Redux는 리듀서를 `undefined` 상태로 호출. 즉, 이때가 초기 상태를 반환할 기회


### store

- 애플리케이션의 상태를 저장
- `getState()` 를 통해 상태에 접근하게 함
- `dispatch(action)` 를 통해 상태를 수정할 수 있게 함
- `subscribe(listener)` 를 통해 리스너를 등록
- __단 하나의 스토어__ 만 가질 수 있음

사용방법은,

__Redux와 연결하고 싶은 컴포넌트를 `react-redux`의 `connect()` 함수로 감싸준다.__

__connect() 호출로 감싸진 컴포넌트는 `dispatch` 함수를 prop으로 받게 되고, 필요한 상태에서 가져오면 된다.__

connect()의 유일한 인수는 __select__ 하나 뿐이다.

이 함수는 전역 Redux 스토어의 상태를 받아서 컴포넌트가 필요로 하는 props를 반환


## 데이터의 흐름
모든 Redux 앱에서의 데이터는 4단계의 생명주기를 따른다.

- 1. store.dispatch(action) 를 호출한다.
- 2. redux 스토어가 지정한 리듀서 함수들을 호출한다.
- 3. 루트 리듀서가 각 리듀서의 출력을 합쳐서 하나의 상태 트리로 만든다.
- 4. Redux 스토어가 루트 리듀서에 의해 반환된 상태 트리를 저장한다.
