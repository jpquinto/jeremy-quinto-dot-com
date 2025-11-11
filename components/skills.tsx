import { BrainCircuit, Cloud, CodeXml, Component, Fingerprint, Hammer, Laptop, Package, SearchCheck, Server } from "lucide-react"
import { Certifications } from "./certifications";

export const Skills = () => {
    return (
      <section
        className="w-full py-12 md:py-24 lg:py-32 bg-white shadow-lg overflow-hidden"
        id="skills"
      >
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block text-lime-700 rounded-lg bg-lime-100 px-3 py-1">
                #skills
              </div>
              <h2 className="bg-gradient-to-b from-black/80 to-black/20 bg-clip-text text-transparent drop-shadow-2xl text-4xl tracking-tight sm:text-6xl pb-3">
                expertise{" "}
                <span className="bg-gradient-to-b from-muted-foreground/80 to-black/20 bg-clip-text text-transparent drop-shadow-2xl text-4xl font-light">
                  &&
                </span>{" "}
                capabilities
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                technologies and tools that enable me to architect, build, and
                deploy applications from top to bottom
              </p>
            </div>
          </div>
          <Component
            role="presentation"
            className="text-gray-500 h-4 w-4 mx-auto"
          />
          <div className="mx-auto grid items-start gap-4 sm:max-w-4xl sm:grid-cols-2 lg:max-w-5xl lg:grid-cols-3">
            <div className="h-full grid gap-1 transition-all p-2 rounded-xl group hover:scale-[1.01] hover:shadow-xl">
              <CodeXml
                role="presentation"
                className="group-hover:text-orange-300 transition-colors"
              />
              <h3 className="text-xl font-bold tracking-tight">languages</h3>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                TypeScript / JavaScript, Python, C++, HTML, CSS
              </p>
            </div>
            <div className="h-full grid gap-1 transition-all p-2 rounded-xl group hover:scale-[1.01] hover:shadow-xl">
              <Laptop
                role="presentation"
                className="group-hover:text-emerald-300 transition-colors"
              />
              <h3 className="text-xl font-bold tracking-tight">frontend</h3>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                Next.js, React, Tailwind, SEO Optimization
              </p>
            </div>
            <div className="h-full grid gap-1 transition-all p-2 rounded-xl group hover:scale-[1.01] hover:shadow-xl">
              <Server
                role="presentation"
                className="group-hover:text-fuchsia-300 transition-colors"
              />
              <h3 className="text-xl font-bold tracking-tight">backend</h3>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                Node.js, Express.js, PostgreSQL/SQL, DynamoDB
              </p>
            </div>
            <div className="h-full grid gap-1 transition-all p-2 rounded-xl group hover:scale-[1.01] hover:shadow-xl">
              <Package
                role="presentation"
                className="group-hover:text-green-300 transition-colors"
              />
              <h3 className="text-xl font-bold tracking-tight">
                CI/CD & deployment
              </h3>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                Terraform, Terragrunt, CDK, CloudFormation, Docker
              </p>
            </div>
            <div className="h-full grid gap-1 transition-all p-2 rounded-xl group hover:scale-[1.01] hover:shadow-xl">
              <Cloud
                role="presentation"
                className="group-hover:text-amber-500 transition-colors"
              />
              <h3 className="text-xl font-bold tracking-tight">cloud</h3>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                AWS (Lambda, API Gateway, S3, RDS, DynamoDB, VPC, Glue, IAM)
              </p>
            </div>
            <div className="h-full grid gap-1 transition-all p-2 rounded-xl group hover:scale-[1.01] hover:shadow-xl">
              <BrainCircuit
                role="presentation"
                className="group-hover:text-blue-600 transition-colors"
              />
              <h3 className="text-xl font-bold tracking-tight">
                AI & machine learning
              </h3>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                LangChain / LangGraph, AWS Bedrock, AWS SageMaker
              </p>
            </div>
            <div className="h-full grid gap-1 transition-all p-2 rounded-xl group hover:scale-[1.01] hover:shadow-xl">
              <SearchCheck
                role="presentation"
                className="group-hover:text-teal-300 transition-colors"
              />
              <h3 className="text-xl font-bold tracking-tight">
                orchestration & monitoring
              </h3>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                AWS Step Functions, EventBridge, SQS/SNS, CloudWatch, X-Ray
              </p>
            </div>
            <div className="h-full grid gap-1 transition-all p-2 rounded-xl group hover:scale-[1.01] hover:shadow-xl">
              <Fingerprint
                role="presentation"
                className="group-hover:text-red-300 transition-colors"
              />
              <h3 className="text-xl font-bold tracking-tight">
                auth & security
              </h3>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                AWS Cognito, AWS IAM, OAuth, JWT, SAML
              </p>
            </div>
            <div className="h-full grid gap-1 transition-all p-2 rounded-xl group hover:scale-[1.01] hover:shadow-xl">
              <Hammer
                role="presentation"
                className="group-hover:text-red-700 transition-colors"
              />
              <h3 className="text-xl font-bold tracking-tight">
                tools & platforms
              </h3>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                Figma, Notion, Git/GitHub, VS Code, Postman
              </p>
            </div>
          </div>
          <Component
            role="presentation"
            className="text-gray-500 h-4 w-4 mx-auto"
          />
          <Certifications />
        </div>
      </section>
    );
}