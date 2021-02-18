import React from 'react'
import './DocumentsRequiredForVerification.css'

export default function DocumentsRequiredForVerification() {
	return (
		<div className='drfv'>
			<div className='drfv__top'>
				<img src='../images/end2inv.png' alt='end' />
			</div>
			<h1>DOCUMENTS REQUIRED FOR VERIFICATION</h1>
			<div className='drfv__body'>
				<h3>A. PROOF OF IDENTITY [DOCUMENTS CONTAINING NAME AND PHOTO]</h3>
				<p>1. Passport</p>
				<p>2. Aadhaar Card</p>
				<p>3. PAN Card</p>

				<h3>B. DOB (Date of Birth) [DOCUMENTS CONTAINING NAME AND DOB]</h3>
				<p>1. Birth Certificate</p>
				<p>2. Passport</p>
				<p>3. Certificate of Date of Birth issued by Group A Gazetted Officer on UIDAI standard certificate format for enrolment/ update</p>
				<p>4. A certificate (on UIDAI standard certificate format for enrolment/ update) or ID Card having photo and Date of Birth (DOB) duly signed and issued by a Government authority</p>
				<p>5. Photo ID card having Date of Birth, issued by Recognized Educational Institution</p>
				<p>6. PAN Card</p>
				
				<h3>C. POA (Proof of Address) [DOCUMENTS CONTAINING NAME AND ADDRESS]</h3>
				<p>1. Passport </p>
				<p>2. Bank Statement/ Passbook</p>
				<p>3. Aadhaar Card </p>
				<p>4. Post Office Account Statement/ Passbook </p>
				<p>5. Ration Card </p>
				<p>6. Voter ID </p>
			</div>
			<p>
				To download a copy of the list of documents required for verification, please{' '}
				<a href='doc/documentsrequiredforverification.pdf' download>
					CLICK HERE
				</a>
			</p>
			<div>
				<div className='drfv__end'>
					<img src='../images/end2.png' alt='end' />
				</div>
			</div>
		</div>
	)
}
