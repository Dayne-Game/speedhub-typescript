const Loading = ( { message }: { message: string } ) => {

    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="spinner-border text-primary" role="status">
                <span className="sr-only">{message}</span>
            </div>
        </div>
    )

}

export default Loading