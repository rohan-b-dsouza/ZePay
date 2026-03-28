export default function AuthRedirect({question, redirect, onClick}) {
    return (
        <div className="flex text-sm justify-center">
            <div>{question}</div>
            <div className="ml-1 underline cursor-pointer" onClick={onClick}>{redirect}</div>
        </div>
    )
}