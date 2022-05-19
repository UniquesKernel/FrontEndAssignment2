import '../LoginForm.css';
import { useForm } from 'react-hook-form';

export function DeleteJobFromModel() {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        let url = "https://localhost:7181/api/Jobs/" + data.jobId + "/model/" + data.modelId
        console.log(url)
        fetch(url, {
            method: 'DELETE',
            credentials: 'include',
            headers: new Headers({
                'Authorization': 'Bearer ' + localStorage.getItem("loginToken"),
                'Content-Type': 'application/json'
            })
        })
            .then(response => {
                if (!response.ok) {
                    response.json().then(json => {
                        console.log(json);
                    });
                }
                else {
                    return response;
                }
            })
            .then(
                (result) => {
                    if (result != null) {
                        window.location.replace("/");
                    }
                },
                (error) => {
                    alert("Error: " + error)
                }
            )
    };
    return (
        <div className="react-hooks-form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="jobId">Job ID</label>
                    <input
                        placeholder=""
                        type="number"
                        {...register("jobId")}
                    />
                </div>

                <div>
                    <label htmlFor="modelId">Model ID</label>
                    <input
                        placeholder=""
                        type="number"
                        {...register("modelId")} />
                </div>


                <button>Submit</button>
            </form>
        </div>
    );
}