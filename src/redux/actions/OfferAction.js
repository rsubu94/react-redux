export let OfferAction = () => {
    let offers = [
        { message: "Oracle Courses Free Vouchers for Certification", code: "Vocher4" },
        { message: "10% discount on Webcourses", code: "WEB10" },
        { message: "Free Vidoes for Angular and React Courses", code: "ANGREACT20" },
        { message: "Exam Vouchers free for REDHAT courses", code: "VocherRED20" },
        { message: "30% discount on Node JS course", code: "NODE30" }
    ]
    return {
        type: "OFFER_ACTION",
        data: offers[Math.floor(Math.random() * 5)]
    }
}