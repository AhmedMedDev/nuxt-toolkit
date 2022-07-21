export default function (context) {
    let is_auth = true;

    return (is_auth)
        ? context.next()
        : window.location('auth/login')
}