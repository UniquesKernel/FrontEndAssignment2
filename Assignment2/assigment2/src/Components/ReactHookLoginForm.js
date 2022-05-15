import './ReactHookLoginForm.css';
import { useForm } from 'react-hook-form';

export function ReactHookLoginForm() {
  const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        let url = "https://localhost:7181/api/Account/login"

        fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: new Headers({
                "Content-Type": "application/json",
                "Accept": "text/plain"
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
                    let token = result["jwt"];
                        localStorage.setItem("loginToken", token)
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
          <label htmlFor="email">Email</label>
          <input
            placeholder="yourEmail@mail.com"
            type="email"
            {...register("email")}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input 
            placeholder=""
            type="password"
            {...register("password")} />
        </div>

        <button>Login</button>
      </form>
    </div>
  );
}
