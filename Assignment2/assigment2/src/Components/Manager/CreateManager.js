import '../LoginForm.css';
import { useForm } from 'react-hook-form';

export function CreateManager() {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        let url = "https://localhost:7181/api/Managers"
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
                    <label htmlFor="firstName">First Name</label>
                    <input
                        placeholder=""
                        type="text"
                        {...register("firstName")}
                    />
                </div>

                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        placeholder=""
                        type="text"
                        {...register("lastName")} />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        placeholder=""
                        type="email"
                        {...register("email")} />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        placeholder=""
                        type="password"
                        {...register("password")} />
                </div>

                <button>Submit</button>
            </form>
        </div>
    );
}