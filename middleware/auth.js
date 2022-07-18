export default function (context) {
    let is_auth = false;

    return (is_auth)
        ? context.next()
        : context.redirect('auth/login')
}