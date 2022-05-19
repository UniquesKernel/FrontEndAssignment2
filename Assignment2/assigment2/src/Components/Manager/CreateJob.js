import '../LoginForm.css';
import { useForm } from 'react-hook-form';

export function CreateJob() {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        let url = "https://localhost:7181/api/Jobs"
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            credentials: 'include',
            headers: new Headers({
                'Authorization': 'Bearer ' + localStorage.getItem("loginToken"),
                'Content-Type': 'application/json'
            })
        })
            .then(response => {
                if (!response.ok) {
                    response.json().then(json => {
                        alert(json["Message"][0]);
                    });
                }
                else {
                    return response.json();
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
                    <label htmlFor="customer">Customer</label>
                    <input
                        placeholder=""
                        type="text"
                        {...register("customer")}
                    />
                </div>

                <div>
                    <label htmlFor="startDate">Start Date</label>
                    <input
                        placeholder=""
                        type="datetime-local"
                        {...register("startdate")} />
                </div>

                <div>
                    <label htmlFor="days">Days</label>
                    <input
                        placeholder=""
                        type="text"
                        {...register("days")} />
                </div>

                <div>
                    <label htmlFor="location">Location</label>
                    <input
                        placeholder=""
                        type="text"
                        {...register("location")} />
                </div>

                <div>
                    <label htmlFor="comments">Comments</label>
                    <input
                        placeholder=""
                        type="text"
                        {...register("comments")} />
                </div>

                <button>Submit</button>
            </form>
        </div>
    );
}