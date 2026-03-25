export default function AuthRedirect({question, redirect}) {
    return (
        <div className="flex text-sm justify-center">
            <div>{question}</div>
            <div className="ml-1 underline">{redirect}</div>
        </div>
    )
}