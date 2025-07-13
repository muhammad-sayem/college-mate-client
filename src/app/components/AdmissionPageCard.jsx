"use client"
import React, { useContext } from 'react';
import AuthContext from '../Context/AuthContext';
import useAxiosSecure from '../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';

const AdmissionPageCard = ({ college }) => {
  const { user } = useContext(AuthContext);
  const { _id, collegeName } = college;
  const router = useRouter();
  const axiosSecure = useAxiosSecure();

  const openModal = () => {
    const modal = document.getElementById(`modal-${_id}`);
    if (modal) modal.showModal();
  };

  const handleApply = async (e, _id) => {
    e.preventDefault();
    const form = e.target;
    const candidateName = form.candidateName.value;
    const email = form.email.value;
    const image = form.image.value;
    const subject = form.subject.value;
    const address = form.address.value;
    const phoneNumber = form.phoneNumber.value;
    const dateOfBirth = form.dateOfBirth.value;

    const applyData = {
      candidateName,
      email,
      image,
      subject,
      phoneNumber,
      address,
      dateOfBirth,
      college
    };

    try {
      await axiosSecure.post('/admissions', applyData);
      form.reset();
      router.push('/my-college');
      Swal.fire({
        title: "Submitted Successfully!",
        icon: "success",
        draggable: true
      });

      const modal = document.getElementById(`modal-${_id}`);
      if (modal) modal.close();
    } catch (error) {
      console.log(error);
    }
  };

  const handleCloseModal = () => {
    const modal = document.getElementById(`modal-${_id}`);
    if (modal) modal.close();
  };

  return (
    <div>
      <div
        onClick={openModal}
        className="border border-sky-700 rounded-bl-3xl rounded-tr-3xl p-6 h-full cursor-pointer hover:shadow-lg transition-all duration-300"
      >
        <p className="text-3xl text-sky-700 text-center font-bold">
          {collegeName}
        </p>
      </div>

      {/* Modal */}
      <dialog id={`modal-${_id}`} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-xl text-sky-700 text-center">Apply On {collegeName}</h3>

          <form onSubmit={(e) => handleApply(e, _id)}>
            <fieldset className="fieldset">
              <legend className="fieldset-legend"> Candidate Name </legend>
              <input
                required
                type="text"
                name='candidateName'
                className="input w-full"
                placeholder="Enter Full Name"
                defaultValue={user?.displayName}
                readOnly
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend"> Email </legend>
              <input
                required
                type="email"
                name='email'
                className="input w-full"
                placeholder="Enter Email"
                defaultValue={user?.email}
                readOnly
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend"> Image </legend>
              <input
                required
                type="text"
                name='image'
                className="input w-full"
                placeholder="Enter Photo URL"
                defaultValue={user?.photoURL}
                readOnly
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend"> Subject </legend>
              <input
                type="text"
                name='subject'
                className="input w-full"
                placeholder="Enter Subject"
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend"> Address </legend>
              <input
                type="text"
                name='address'
                className="input w-full"
                placeholder="Enter Address"
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend"> Phone Number </legend>
              <input
                type="number"
                name='phoneNumber'
                className="input w-full"
                placeholder="Enter Phone Number"
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend"> Date of Birth </legend>
              <input
                type="date"
                name='dateOfBirth'
                className="input w-full"
                placeholder="Date of Birth"
              />
            </fieldset>

            <button className="btn w-full bg-sky-700 text-white font-bold text-md hover:bg-transparent hover:text-sky-700 hover:border-sky-700 my-2"> Apply </button>
          </form>

          <div>
            <button onClick={handleCloseModal} className="btn w-full bg-red-500 text-white font-bold text-md hover:bg-transparent hover:text-red-500 hover:border-red-500"> Close </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AdmissionPageCard;
