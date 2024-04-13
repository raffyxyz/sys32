"use client";
import React from "react";
import { useFormState } from "react-dom";
import { Card, CardTitle, CardBody } from "../Common/Card";
import { Input } from "../Common/Input";
import { Button } from "../Common/Button";
import { login } from "@/actions/auth-actions";

export const Signin = () => {
  const [state, formAction] = useFormState(login, { error: "" });

  return (
    <Card className="w-[500px] border">
      <CardBody>
        <CardTitle>Signin</CardTitle>

        <form action={formAction}>
          <div className="mt-10 mb-4">
            <Input name="username" placeholder="Username" />
          </div>
          <div className="mb-4">
            <Input name="password" placeholder="Password" type="password" />
          </div>
          <Button type="submit" className="mt-2" variant="primary">
            Login
          </Button>
        </form>
      </CardBody>
    </Card>
  );
};
