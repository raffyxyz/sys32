import React from "react";
import { Card, CardBody, CardTitle } from "@/components/Common/Card";
import { Dashboard, RefresherBox, RefresherCard } from "@/components/Dashboard";
import { Gauge, Timer, UserRoundCheck } from "lucide-react";

export default function DashboardPage() {
  return (
    <React.Fragment>
      <Dashboard>
        <RefresherBox>
          <RefresherCard
            icon={<UserRoundCheck className="text-primary" size={26} />}
            title="Total Client"
            subTitle="200 Clients"
          />
          <RefresherCard
            icon={<Timer className="text-primary" size={26} />}
            title="Avg. Service Time"
            subTitle="42 Minutes"
          />
          <RefresherCard
            icon={<Gauge className="text-primary" size={26} />}
            title="Avg. Access Time"
            subTitle="60 Minutes"
          />
        </RefresherBox>
        <Card className="border">
          <CardBody>
            <CardTitle>Completed Service</CardTitle>
            <div className="mt-0">
              <div className="flex justify-center">
                <div
                  className="radial-progress text-primary"
                  style={{
                    "--value": "70",
                    "--size": "12rem",
                    "--thickness": "2rem",
                  }}
                  role="progressbar"
                >
                  70%
                </div>
              </div>
              {/* <PieChart /> */}
            </div>
          </CardBody>
        </Card>
        <Card className="border">
          <CardBody>
            <CardTitle>Card title!</CardTitle>
            <div className="mt-6">
              <ul className="steps steps-vertical">
                <li className="step step-primary">Register</li>
                <li className="step step-primary">Choose plan</li>
                <li className="step">Purchase</li>
                <li className="step">Receive Product</li>
              </ul>
            </div>
          </CardBody>
        </Card>
      </Dashboard>
    </React.Fragment>
  );
}
