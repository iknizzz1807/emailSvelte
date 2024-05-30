<script>
    export let form;
</script>

<div class="wrapper">
    <fieldset>
        <legend>Contact us</legend>
        <form method="POST" class="container">
            <div class="input">
                <label for="">Your email:</label>
                <input name="to" type="email" placeholder="abc123@gmail.com" />
            </div>
            <div class="input">
                <label for="">Subject:</label>
                <input name="subject" type="text" value="" />
            </div>
            <div class="input">
                <label for="">Message:</label>
                <textarea name="body" rows="6" value="" />
            </div>
            <button type="submit">Send</button>
            
        </form>
        <p class="success">{form?.success || ""}</p>
        <p class="error">{form?.error || ""}</p>
    </fieldset>
</div>

<style>
    .wrapper {
        max-width: 800px;
        margin: 2em auto;
    }
    fieldset {
        padding: 2em;
        box-shadow: 0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a;
    }
    legend {
        font-weight: bold;
        font-size: 2em;
        padding: 0 0.25em;
        color: #333;
    }
    .container {
        max-width: 400px;
    }
    .input {
        display: grid;
        margin-bottom: 1.5em;
    }
    label {
        font-weight: 600;
        margin-bottom: 0.25em;
        color: #555;
    }
    input {
        padding: 5px;
        height: 20px;
    }
    button {
        justify-content: center;
        width: 100px;
        height: 40px;
        cursor: pointer;
        padding: 0.5em 1em;
        border-radius: 4px;
        border: 1px solid rgb(5, 151, 64);
        background-color: rgb(5, 151, 64);
        color: white
    }
    .success {
        color: #0a5;
    }
    .error {
        color: #a00;
    }
</style>