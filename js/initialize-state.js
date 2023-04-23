const calculateBirthday = () => {
    const dob = new Date("06/21/1995");
    const EPOCH = new Date(0);
    const EPOCH_YEAR = EPOCH.getUTCFullYear();
    const EPOCH_MONTH = EPOCH.getUTCMonth();
    const EPOCH_DAY = EPOCH.getUTCDate();

    const calculateAge = () => {
        const diff = new Date(Date.now() - dob.getTime());
        return {
            years: Math.abs(diff.getUTCFullYear() - EPOCH_YEAR),
            months: Math.abs(diff.getUTCMonth() - EPOCH_MONTH),
            days: Math.abs(diff.getUTCDate() - EPOCH_DAY)
        };
    };
    const {years, months, days} = calculateAge()
    const ageFormatted = () => {
        let ageFormat = years + " years"
        if (months > 0) {
            ageFormat += " " + months + " month"
            if (months > 1) {
                ageFormat += "s"
            }
        }
        if (days > 0) {
            ageFormat += " " + days + " day"
            if (days > 1) {
                ageFormat += "s"
            }
        }
        return ageFormat
    }
    return ageFormatted()
}

document.addEventListener("DOMContentLoaded", (_) => {
    document.getElementById("age_value").innerHTML = calculateBirthday()
});
