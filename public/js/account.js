document.addEventListener("DOMContentLoaded", async () => {
  const user = await requireAuthOrRedirect();
  if (!user) return; // redirecting to /login.html

  const form = document.getElementById("profile-form");
  const emailInput = document.getElementById("profile-email");
  const nameInput = document.getElementById("profile-name");
  const phoneInput = document.getElementById("profile-phone");
  const passportInput = document.getElementById("profile-passport");
  const dobField = document.getElementById("profile-dob-field");
  const saveBtn = document.getElementById("save-profile-btn");

  const dobPicker = initDatePicker(dobField, {
    minDateISO: "1920-01-01",
    maxDateISO: todayISO(),
    testId: "profile-dob",
    onSelect: () => dobField.classList.remove("invalid"),
  });

  emailInput.value = user.email;
  nameInput.value = user.name || "";
  phoneInput.value = user.phone || "";
  passportInput.value = user.passport || "";
  if (user.dob) dobPicker.setValue(user.dob);

  form.style.display = "";

  function setError(fieldId, hasError) {
    const el = document.getElementById(fieldId);
    if (el) el.classList.toggle("invalid", hasError);
  }

  function validate() {
    let valid = true;

    const nameOk = nameInput.value.trim().length > 0;
    setError("profile-name-field", !nameOk);
    if (!nameOk) valid = false;

    const phoneValue = phoneInput.value.trim();
    const phoneOk =
      phoneValue === "" || phoneValue.replace(/\D/g, "").length >= 7;
    setError("profile-phone-field", !phoneOk);
    if (!phoneOk) valid = false;

    const dobTyped = document
      .getElementById("profile-dob-trigger")
      .value.trim();
    const dobOk = dobTyped === "" || !!dobPicker.getValue();
    dobField.classList.toggle("invalid", !dobOk);
    if (!dobOk) valid = false;

    return valid;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!validate()) return;

    saveBtn.disabled = true;
    saveBtn.textContent = "Saving\u2026";
    try {
      await apiPatch("/api/me", {
        name: nameInput.value.trim(),
        phone: phoneInput.value.trim(),
        dob: dobPicker.getValue() || "",
        passport: passportInput.value.trim(),
      });
      showToast("Account details saved.", "profile-saved-toast");
    } catch (err) {
      showToast(err.message, "profile-save-error-toast");
    } finally {
      saveBtn.disabled = false;
      saveBtn.textContent = "Save changes";
    }
  });
});
