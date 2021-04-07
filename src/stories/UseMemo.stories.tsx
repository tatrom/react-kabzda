import React, {ChangeEvent, useCallback, useMemo, useState} from 'react'

export default {
    title: 'useMemo'
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(3)
    const [b, setB] = useState<number>(3)
    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 10000000) {
                fake++;
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i
        }
        return tempResultA;
    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB *= i;
    }
    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))} type="text"/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)} type="text"/>
        <hr/>
        <div>Result for a: {resultA}</div>
        <div>Result for b: {resultB}</div>
    </>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log("Users Secret")
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(UsersSecret)
export const LikeUseCallback = () => {
    console.log('LikeUseCallBack')
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(["Dimych", "Valera", "Artem", "Katya"]);

    // const memoizedAddBook = useMemo(() => {
    //     return () => {
    //         const newUsers = [...books, 'Angular' + new Date().getTime()];
    //         setBooks(newUsers)
    //     }
    // }, [books])

    const memoizedAddBook2 = useCallback(() => {
        const newUsers = [...books, 'Angular' + new Date().getTime()];
        setBooks(newUsers)
    }, [books])
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        {/*<Users users={newArray}/>*/}
        <Book books={books} addBook={memoizedAddBook2}/>
    </>
}

type BooksSecretPropsType = {
    books: Array<string>
    addBook: () => void
}

const BooksSecret = (props: BooksSecretPropsType) => {
    console.log("BooksSecret")
    return <div>
        <button onClick={() => props.addBook()}>add book</button>
        {
            props.books.map((book, i) => <div key={i}>{book}</div>)
        }</div>
}

const Book = React.memo(BooksSecret)
