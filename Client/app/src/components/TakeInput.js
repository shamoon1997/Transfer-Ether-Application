import React from 'react';

function TakeInput({ placeholder, name, type, value, handleChange }) {
	return (
		<div>
			<div className="input-container">
				<input
					placeholder={placeholder}
					name={name}
					type={type}
					value={value}
					onChange={(e) => handleChange(e)}
					step="0.0001"
				/>
			</div>
		</div>
	);
}

export default TakeInput;
