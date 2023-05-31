'use client'
import Image from "next/image";
import {Button} from "@/app/components/Button";
import {useState} from "react";

export const SetPassword = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [confirmPassword, setConfirmPassword] = useState(false);

	return (
		<div className={"w-[512px] h-[371px] flex flex-col gap-y-12"}>
			<div className={"flex flex-col gap-y-4"}>
				<h1 className={"font-gothic font-bold text-[40px]"}>Set a password</h1>
				<p className={"text-gray"}>
					Your previous password has been reset. Please set a new password for your account.
				</p>
			</div>

			<form className={"flex flex-col gap-y-6"}>
				<div className={"flex flex-col gap-y-4"}>
					<div className={"form__group"}>
						<input
							id={"password"}
							type={showPassword ? "text" : "password"}
							className={"w-[512px] h-[56px] px-4 rounded-sm form__field"}
							placeholder={"Create Password"}
						/>

						<Image
							src={"./images/icons/trailing-icon.svg"}
							alt={"visible"}
							className={
								"absolute top-[50%] right-4 transform -translate-y-[35%]"
							}
							width={48}
							height={48}
							onClick={() => setShowPassword(!showPassword)}
						></Image>

						<label htmlFor={"password"} className={"form__label !w-[100px]"}>
							Create Password
						</label>
					</div>

					<div className={"form__group"}>
						<input
							id={"confirm-password"}
							type={confirmPassword ? "text" : "password"}
							className={"w-[512px] h-[56px] px-4 rounded-sm form__field"}
							placeholder={"Re-enter Password"}
						/>

						<Image
							src={"./images/icons/trailing-icon.svg"}
							alt={"visible"}
							className={
								"absolute top-[50%] right-4 transform -translate-y-[35%]"
							}
							width={48}
							height={48}
							onClick={() => setConfirmPassword(!confirmPassword)}
						></Image>

						<label
							htmlFor={"confirm-password"}
							className={"form__label !w-[110px]"}
						>
							Re-enter Password
						</label>
					</div>
				</div>

				<Button className={"w-[512px] h-[48px]"}>Set password</Button>
			</form>
		</div>
	)
}