import { Question } from '../interfaces'

export const questions: Question[] = [
  {
    question:
      'A company collects data for temperature, humidity, and atmospheric pressure in cities across multiple continents. The average volume of data that the company collects from each site daily is 500 GB. Each site has a high-speed Internet connection. The company wants to aggregate the data from all these global sites as quickly as possible in a single Amazon S3 bucket. The solution must minimize operational complexity. Which solution meets these requirements?',
    answers: [
      'Turn on S3 Transfer Acceleration on the destination S3 bucket. Use multipart uploads to directly upload site data to the destination S3 bucket.',
      'Upload the data from each site to an S3 bucket in the closest Region. Use S3 Cross-Region Replication to copy objects to the destination S3 bucket. Then remove the data from the origin S3 bucket.',
      'Schedule AWS Snowball Edge Storage Optimized device jobs daily to transfer data from each site to the closest Region. Use S3 Cross-Region Replication to copy objects to the destination S3 bucket.',
      'Upload the data from each site to an Amazon EC2 instance in the closest Region. Store the data in an Amazon Elastic Block Store (Amazon EBS) volume. At regular intervals, take an EBS snapshot and copy it to the Region that contains the destination S3 bucket. Restore the EBS volume in that Region.'
    ],
    correctAnswer: [0]
  },
  {
    question:
      'A company needs the ability to analyze the log files of its proprietary application. The logs are stored in JSON format in an Amazon S3 bucket. Queries will be simple and will run on-demand. A solutions architect needs to perform the analysis with minimal changes to the existing architecture. What should the solutions architect do to meet these requirements with the LEAST amount of operational overhead?',
    answers: [
      'Use Amazon Redshift to load all the content into one place and run the SQL queries as needed.',
      'Use Amazon CloudWatch Logs to store the logs. Run SQL queries as needed from the Amazon CloudWatch console.',
      'Use Amazon Athena directly with Amazon S3 to run the queries as needed.',
      'Use AWS Glue to catalog the logs. Use a transient Apache Spark cluster on Amazon EMR to run the SQL queries as needed.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'A company uses AWS Organizations to manage multiple AWS accounts for different departments. The management account has an Amazon S3 bucket that contains project reports. The company wants to limit access to this S3 bucket to only users of accounts within the organization in AWS Organizations. Which solution meets these requirements with the LEAST amount of operational overhead?',
    answers: [
      'Add the aws PrincipalOrgID global condition key with a reference to the organization ID to the S3 bucket policy.',
      'Create an organizational unit (OU) for each department. Add the aws:PrincipalOrgPaths global condition key to the S3 bucket policy.',
      'Use AWS CloudTrail to monitor the CreateAccount, InviteAccountToOrganization, LeaveOrganization, and RemoveAccountFromOrganization events. Update the S3 bucket policy accordingly.',
      'Tag each user that needs access to the S3 bucket. Add the aws:PrincipalTag global condition key to the S3 bucket policy.'
    ],
    correctAnswer: [0]
  },
  {
    question:
      'An application runs on an Amazon EC2 instance in a VPC. The application processes logs that are stored in an Amazon S3 bucket. The EC2 instance needs to access the S3 bucket without connectivity to the internet. Which solution will provide private network connectivity to Amazon S3?',
    answers: [
      'Create a gateway VPC endpoint to the S3 bucket.',
      'Stream the logs to Amazon CloudWatch Logs. Export the logs to the S3 bucket.',
      'Create an instance profile on Amazon EC2 to allow S3 access.',
      'Create an Amazon API Gateway API with a private link to access the S3 endpoint.'
    ],
    correctAnswer: [0]
  },
  {
    question:
      'A company is hosting a web application on AWS using a single Amazon EC2 instance that stores user-uploaded documents in an Amazon EBS volume. For better scalability and availability, the company duplicated the architecture and created a second EC2 instance and EBS volume in another Availability Zone, placing both behind an Application Load Balancer. After completing this change, users reported that, each time they refreshed the website, they could see one subset of their documents or the other, but never all of the documents at the same time. What should a solutions architect propose to ensure users see all of their documents at once?',
    answers: [
      'Copy the data so both EBS volumes contain all the documents',
      'Configure the Application Load Balancer to direct a user to the server with the documents',
      'Copy the data from both EBS volumes to Amazon EFS. Modify the application to save new documents to Amazon EFS',
      'Configure the Application Load Balancer to send the request to both servers. Return each document from the correct server'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'A company uses NFS to store large video files in on-premises network attached storage. Each video file ranges in size from 1 MB to 500 GB. The total storage is 70 TB and is no longer growing. The company decides to migrate the video files to Amazon S3. The company must migrate the video files as soon as possible while using the least possible network bandwidth. Which solution will meet these requirements?',
    answers: [
      'Create an S3 bucket. Create an IAM role that has permissions to write to the S3 bucket. Use the AWS CLI to copy all files locally to the S3 bucket.',
      'Create an AWS Snowball Edge job. Receive a Snowball Edge device on premises. Use the Snowball Edge client to transfer data to the device. Return the device so that AWS can import the data into Amazon S3.',
      'Deploy an S3 File Gateway on premises. Create a public service endpoint to connect to the S3 File Gateway. Create an S3 bucket. Create a new NFS file share on the S3 File Gateway. Point the new file share to the S3 bucket. Transfer the data from the existing NFS file share to the S3 File Gateway.',
      'Set up an AWS Direct Connect connection between the on-premises network and AWS. Deploy an S3 File Gateway on premises. Create a public virtual interface (VIF) to connect to the S3 File Gateway. Create an S3 bucket. Create a new NFS file share on the S3 File Gateway. Point the new file share to the S3 bucket. Transfer the data from the existing NFS file share to the S3 File Gateway.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'A company has an application that ingests incoming messages. Dozens of other applications and microservices then quickly consume these messages. The number of messages varies drastically and sometimes increases suddenly to 100,000 each second. The company wants to decouple the solution and increase scalability. Which solution meets these requirements?',
    answers: [
      'Persist the messages to Amazon Kinesis Data Analytics. Configure the consumer applications to read and process the messages.',
      'Deploy the ingestion application on Amazon EC2 instances in an Auto Scaling group to scale the number of EC2 instances based on CPU metrics.',
      'Write the messages to Amazon Kinesis Data Streams with a single shard. Use an AWS Lambda function to preprocess messages and store them in Amazon DynamoDB. Configure the consumer applications to read from DynamoDB to process the messages.',
      'Publish the messages to an Amazon Simple Notification Service (Amazon SNS) topic with multiple Amazon Simple Queue Service (Amazon SQS) subscriptions. Configure the consumer applications to process the messages from the queues.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'A company is migrating a distributed application to AWS. The application serves variable workloads. The legacy platform consists of a primary server that coordinates jobs across multiple compute nodes. The company wants to modernize the application with a solution that maximizes resiliency and scalability. How should a solutions architect design the architecture to meet these requirements?',
    answers: [
      'Configure an Amazon Simple Queue Service (Amazon SQS) queue as a destination for the jobs. Implement the compute nodes with Amazon EC2 instances that are managed in an Auto Scaling group. Configure EC2 Auto Scaling to use scheduled scaling.',
      'Configure an Amazon Simple Queue Service (Amazon SQS) queue as a destination for the jobs. Implement the compute nodes with Amazon EC2 instances that are managed in an Auto Scaling group. Configure EC2 Auto Scaling based on the size of the queue.',
      'Implement the primary server and the compute nodes with Amazon EC2 instances that are managed in an Auto Scaling group. Configure AWS CloudTrail as a destination for the jobs. Configure EC2 Auto Scaling based on the load on the primary server.',
      'Implement the primary server and the compute nodes with Amazon EC2 instances that are managed in an Auto Scaling group. Configure Amazon EventBridge (Amazon CloudWatch Events) as a destination for the jobs. Configure EC2 Auto Scaling based on the load on the compute nodes.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      "A company is running an SMB file server in its data center. The file server stores large files that are accessed frequently for the first few days after the files are created. After 7 days the files are rarely accessed. The total data size is increasing and is close to the company's total storage capacity. A solutions architect must increase the company's available storage space without losing low-latency access to the most recently accessed files. The solutions architect must also provide file lifecycle management to avoid future storage issues. Which solution will meet these requirements?",
    answers: [
      'Use AWS DataSync to copy data that is older than 7 days from the SMB file server to AWS.',
      "Create an Amazon S3 File Gateway to extend the company's storage space. Create an S3 Lifecycle policy to transition the data to S3 Glacier Deep Archive after 7 days.",
      "Create an Amazon FSx for Windows File Server file system to extend the company's storage space.",
      "Install a utility on each user's computer to access Amazon S3. Create an S3 Lifecycle policy to transition the data to S3 Glacier Flexible Retrieval after 7 days."
    ],
    correctAnswer: [1]
  },
  {
    question:
      'A company is building an ecommerce web application on AWS. The application sends information about new orders to an Amazon API Gateway REST API to process. The company wants to ensure that orders are processed in the order that they are received. Which solution will meet these requirements?',
    answers: [
      'Use an API Gateway integration to publish a message to an Amazon Simple Notification Service (Amazon SNS) topic when the application receives an order. Subscribe an AWS Lambda function to the topic to perform processing.',
      'Use an API Gateway integration to send a message to an Amazon Simple Queue Service (Amazon SQS) FIFO queue when the application receives an order. Configure the SQS FIFO queue to invoke an AWS Lambda function for processing.',
      'Use an API Gateway authorizer to block any requests while the application processes an order.',
      'Use an API Gateway integration to send a message to an Amazon Simple Queue Service (Amazon SQS) standard queue when the application receives an order. Configure the SQS standard queue to invoke an AWS Lambda function for processing.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'A company has an application that runs on Amazon EC2 instances and uses an Amazon Aurora database. The EC2 instances connect to the database by using user names and passwords that are stored locally in a file. The company wants to minimize the operational overhead of credential management. What should a solutions architect do to accomplish this goal?',
    answers: [
      'Use AWS Secrets Manager. Turn on automatic rotation.',
      'Use AWS Systems Manager Parameter Store. Turn on automatic rotation.',
      'Create an Amazon S3 bucket to store objects that are encrypted with an AWS Key Management Service (AWS KMS) encryption key. Migrate the credential file to the S3 bucket. Point the application to the S3 bucket.',
      'Create an encrypted Amazon Elastic Block Store (Amazon EBS) volume for each EC2 instance. Attach the new EBS volume to each EC2 instance. Migrate the credential file to the new EBS volume. Point the application to the new EBS volume.'
    ],
    correctAnswer: [0]
  },
  {
    question:
      'A global company hosts its web application on Amazon EC2 instances behind an Application Load Balancer (ALB). The web application has static data and dynamic data. The company stores its static data in an Amazon S3 bucket. The company wants to improve performance and reduce latency for the static data and dynamic data. The company is using its own domain name registered with Amazon Route 53. What should a solutions architect do to meet these requirements?',
    answers: [
      'Create an Amazon CloudFront distribution that has the S3 bucket and the ALB as origins. Configure Route 53 to route traffic to the CloudFront distribution.',
      'Create an Amazon CloudFront distribution that has the ALB as an origin. Create an AWS Global Accelerator standard accelerator that has the S3 bucket as an endpoint. Configure Route 53 to route traffic to the CloudFront distribution.',
      'Create an Amazon CloudFront distribution that has the S3 bucket as an origin. Create an AWS Global Accelerator standard accelerator that has the ALB and the CloudFront distribution as endpoints. Create a custom domain name that points to the accelerator DNS name. Use the custom domain name as an endpoint for the web application.',
      'Create an Amazon CloudFront distribution that has the ALB as an origin. Create an AWS Global Accelerator standard accelerator that has the S3 bucket as an endpoint. Create two domain names. Point one domain name to the CloudFront DNS name for dynamic content. Point the other domain name to the accelerator DNS name for static content. Use the domain names as endpoints for the web application.'
    ],
    correctAnswer: [0]
  },
  {
    question:
      'A company performs monthly maintenance on its AWS infrastructure. During these maintenance activities, the company needs to rotate the credentials for its Amazon RDS for MySQL databases across multiple AWS Regions. Which solution will meet these requirements with the LEAST operational overhead?',
    answers: [
      'Store the credentials as secrets in AWS Secrets Manager. Use multi-Region secret replication for the required Regions. Configure Secrets Manager to rotate the secrets on a schedule.',
      'Store the credentials as secrets in AWS Systems Manager by creating a secure string parameter. Use multi-Region secret replication for the required Regions. Configure Systems Manager to rotate the secrets on a schedule.',
      'Store the credentials in an Amazon S3 bucket that has server-side encryption (SSE) enabled. Use Amazon EventBridge (Amazon CloudWatch Events) to invoke an AWS Lambda function to rotate the credentials.',
      'Encrypt the credentials as secrets by using AWS Key Management Service (AWS KMS) multi-Region customer managed keys. Store the secrets in an Amazon DynamoDB global table. Use an AWS Lambda function to retrieve the secrets from DynamoDB. Use the RDS API to rotate the secrets.'
    ],
    correctAnswer: [0]
  },
  {
    question:
      "A company runs an ecommerce application on Amazon EC2 instances behind an Application Load Balancer. The instances run in an Amazon EC2 Auto Scaling group across multiple Availability Zones. The Auto Scaling group scales based on CPU utilization metrics. The ecommerce application stores the transaction data in a MySQL 8.0 database that is hosted on a large EC2 instance. The database's performance degrades quickly as application load increases. The application handles more read requests than write transactions. The company wants a solution that will automatically scale the database to meet the demand of unpredictable read workloads while maintaining high availability. Which solution will meet these requirements?",
    answers: [
      'Use Amazon Redshift with a single node for leader and compute functionality.',
      'Use Amazon RDS with a Single-AZ deployment Configure Amazon RDS to add reader instances in a different Availability Zone.',
      'Use Amazon Aurora with a Multi-AZ deployment. Configure Aurora Auto Scaling with Aurora Replicas.',
      'Use Amazon ElastiCache for Memcached with EC2 Spot Instances.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'A company recently migrated to AWS and wants to implement a solution to protect the traffic that flows in and out of the production VPC. The company had an inspection server in its on-premises data center. The inspection server performed specific operations such as traffic flow inspection and traffic filtering. The company wants to have the same functionalities in the AWS Cloud. Which solution will meet these requirements?',
    answers: [
      'Use Amazon GuardDuty for traffic inspection and traffic filtering in the production VPC.',
      'Use Traffic Mirroring to mirror traffic from the production VPC for traffic inspection and filtering.',
      'Use AWS Network Firewall to create the required rules for traffic inspection and traffic filtering for the production VPC.',
      'Use AWS Firewall Manager to create the required rules for traffic inspection and traffic filtering for the production VPC.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      "A company hosts a data lake on AWS. The data lake consists of data in Amazon S3 and Amazon RDS for PostgreSQL. The company needs a reporting solution that provides data visualization and includes all the data sources within the data lake. Only the company's management team should have full access to all the visualizations. The rest of the company should have only limited access. Which solution will meet these requirements?",
    answers: [
      'Create an analysis in Amazon QuickSight. Connect all the data sources and create new datasets. Publish dashboards to visualize the data. Share the dashboards with the appropriate IAM roles.',
      'Create an analysis in Amazon QuickSight. Connect all the data sources and create new datasets. Publish dashboards to visualize the data. Share the dashboards with the appropriate users and groups.',
      'Create an AWS Glue table and crawler for the data in Amazon S3. Create an AWS Glue extract, transform, and load (ETL) job to produce reports. Publish the reports to Amazon S3. Use S3 bucket policies to limit access to the reports.',
      'Create an AWS Glue table and crawler for the data in Amazon S3. Use Amazon Athena Federated Query to access data within Amazon RDS for PostgreSQL. Generate reports by using Amazon Athena. Publish the reports to Amazon S3. Use S3 bucket policies to limit access to the reports.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'A company is implementing a new business application. The application runs on two Amazon EC2 instances and uses an Amazon S3 bucket for document storage. A solutions architect needs to ensure that the EC2 instances can access the S3 bucket. What should the solutions architect do to meet this requirement?',
    answers: [
      'Create an IAM role that grants access to the S3 bucket. Attach the role to the EC2 instances.',
      'Create an IAM policy that grants access to the S3 bucket. Attach the policy to the EC2 instances.',
      'Create an IAM group that grants access to the S3 bucket. Attach the group to the EC2 instances.',
      'Create an IAM user that grants access to the S3 bucket. Attach the user account to the EC2 instances.'
    ],
    correctAnswer: [0]
  },
  {
    question:
      'An application development team is designing a microservice that will convert large images to smaller, compressed images. When a user uploads an image through the web interface, the microservice should store the image in an Amazon S3 bucket, process and compress the image with an AWS Lambda function, and store the image in its compressed form in a different S3 bucket. A solutions architect needs to design a solution that uses durable, stateless components to process the images automatically. Which combination of actions will meet these requirements? (Choose two.)',
    answers: [
      'Create an Amazon Simple Queue Service (Amazon SQS) queue. Configure the S3 bucket to send a notification to the SQS queue when an image is uploaded to the S3 bucket.',
      'Configure the Lambda function to use the Amazon Simple Queue Service (Amazon SQS) queue as the invocation source. When the SQS message is successfully processed, delete the message in the queue.',
      'Configure the Lambda function to monitor the S3 bucket for new uploads. When an uploaded image is detected, write the file name to a text file in memory and use the text file to keep track of the images that were processed.',
      'Launch an Amazon EC2 instance to monitor an Amazon Simple Queue Service (Amazon SQS) queue. When items are added to the queue, log the file name in a text file on the EC2 instance and invoke the Lambda function.',
      "Configure an Amazon EventBridge (Amazon CloudWatch Events) event to monitor the S3 bucket. When an image is uploaded, send an alert to an Amazon Simple Notification Service (Amazon SNS) topic with the application owner's email address for further processing."
    ],
    correctAnswer: [0, 1]
  },
  {
    question:
      'A company has a three-tier web application that is deployed on AWS. The web servers are deployed in a public subnet in a VPC. The application servers and database servers are deployed in private subnets in the same VPC. The company has deployed a third-party virtual firewall appliance from AWS Marketplace in an inspection VPC. The appliance is configured with an IP interface that can accept IP packets. A solutions architect needs to integrate the web application with the appliance to inspect all traffic to the application before the traffic reaches the web server. Which solution will meet these requirements with the LEAST operational overhead?',
    answers: [
      "Create a Network Load Balancer in the public subnet of the application's VPC to route the traffic to the appliance for packet inspection.",
      "Create an Application Load Balancer in the public subnet of the application's VPC to route the traffic to the appliance for packet inspection.",
      'Deploy a transit gateway in the inspection VPConfigure route tables to route the incoming packets through the transit gateway.',
      'Deploy a Gateway Load Balancer in the inspection VPC. Create a Gateway Load Balancer endpoint to receive the incoming packets and forward the packets to the appliance.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'A company wants to improve its ability to clone large amounts of production data into a test environment in the same AWS Region. The data is stored in Amazon EC2 instances on Amazon Elastic Block Store (Amazon EBS) volumes. Modifications to the cloned data must not affect the production environment. The software that accesses this data requires consistently high I/O performance. A solutions architect needs to minimize the time that is required to clone the production data into the test environment. Which solution will meet these requirements?',
    answers: [
      'Take EBS snapshots of the production EBS volumes. Restore the snapshots onto EC2 instance store volumes in the test environment.',
      'Configure the production EBS volumes to use the EBS Multi-Attach feature. Take EBS snapshots of the production EBS volumes. Attach the production EBS volumes to the EC2 instances in the test environment.',
      'Take EBS snapshots of the production EBS volumes. Create and initialize new EBS volumes. Attach the new EBS volumes to EC2 instances in the test environment before restoring the volumes from the production EBS snapshots.',
      'Take EBS snapshots of the production EBS volumes. Turn on the EBS fast snapshot restore feature on the EBS snapshots. Restore the snapshots into new EBS volumes. Attach the new EBS volumes to EC2 instances in the test environment.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'An ecommerce company wants to launch a one-deal-a-day website on AWS. Each day will feature exactly one product on sale for a period of 24 hours. The company wants to be able to handle millions of requests each hour with millisecond latency during peak hours. Which solution will meet these requirements with the LEAST operational overhead?',
    answers: [
      'Use Amazon S3 to host the full website in different S3 buckets. Add Amazon CloudFront distributions. Set the S3 buckets as origins for the distributions. Store the order data in Amazon S3.',
      'Deploy the full website on Amazon EC2 instances that run in Auto Scaling groups across multiple Availability Zones. Add an Application Load Balancer (ALB) to distribute the website traffic. Add another ALB for the backend APIs. Store the data in Amazon RDS for MySQL.',
      'Migrate the full application to run in containers. Host the containers on Amazon Elastic Kubernetes Service (Amazon EKS). Use the Kubernetes Cluster Autoscaler to increase and decrease the number of pods to process bursts in traffic. Store the data in Amazon RDS for MySQL.',
      "Use an Amazon S3 bucket to host the website's static content. Deploy an Amazon CloudFront distribution. Set the S3 bucket as the origin. Use Amazon API Gateway and AWS Lambda functions for the backend APIs. Store the data in Amazon DynamoDB."
    ],
    correctAnswer: [3]
  },
  {
    question:
      'A solutions architect is using Amazon S3 to design the storage architecture of a new digital media application. The media files must be resilient to the loss of an Availability Zone. Some files are accessed frequently while other files are rarely accessed in an unpredictable pattern. The solutions architect must minimize the costs of storing and retrieving the media files. Which storage option meets these requirements?',
    answers: [
      'S3 Standard',
      'S3 Intelligent-Tiering',
      'S3 Standard-Infrequent Access (S3 Standard-IA)',
      'S3 One Zone-Infrequent Access (S3 One Zone-IA)'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'A company is storing backup files by using Amazon S3 Standard storage. The files are accessed frequently for 1 month. However, the files are not accessed after 1 month. The company must keep the files indefinitely. Which storage solution will meet these requirements MOST cost-effectively?',
    answers: [
      'Configure S3 Intelligent-Tiering to automatically migrate objects.',
      'Create an S3 Lifecycle configuration to transition objects from S3 Standard to S3 Glacier Deep Archive after 1 month.',
      'Create an S3 Lifecycle configuration to transition objects from S3 Standard to S3 Standard-Infrequent Access (S3 Standard-IA) after 1 month.',
      'Create an S3 Lifecycle configuration to transition objects from S3 Standard to S3 One Zone-Infrequent Access (S3 One Zone-IA) after 1 month.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'A company observes an increase in Amazon EC2 costs in its most recent bill. The billing team notices unwanted vertical scaling of instance types for a couple of EC2 instances. A solutions architect needs to create a graph comparing the last 2 months of EC2 costs and perform an in-depth analysis to identify the root cause of the vertical scaling. How should the solutions architect generate the information with the LEAST operational overhead?',
    answers: [
      'Use AWS Budgets to create a budget report and compare EC2 costs based on instance types.',
      "Use Cost Explorer's granular filtering feature to perform an in-depth analysis of EC2 costs based on instance types.",
      'Use graphs from the AWS Billing and Cost Management dashboard to compare EC2 costs based on instance types for the last 2 months.',
      'Use AWS Cost and Usage Reports to create a report and send it to an Amazon S3 bucket. Use Amazon QuickSight with Amazon S3 as a source to generate an interactive graph based on instance types.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'A company is designing an application. The application uses an AWS Lambda function to receive information through Amazon API Gateway and to store the information in an Amazon Aurora PostgreSQL database. During the proof-of-concept stage, the company has to increase the Lambda quotas significantly to handle the high volumes of data that the company needs to load into the database. A solutions architect must recommend a new design to improve scalability and minimize the configuration effort. Which solution will meet these requirements?',
    answers: [
      'Refactor the Lambda function code to Apache Tomcat code that runs on Amazon EC2 instances. Connect the database by using native Java Database Connectivity (JDBC) drivers.',
      'Change the platform from Aurora to Amazon DynamoDB. Provision a DynamoDB Accelerator (DAX) cluster. Use the DAX client SDK to point the existing DynamoDB API calls at the DAX cluster.',
      'Set up two Lambda functions. Configure one function to receive the information. Configure the other function to load the information into the database. Integrate the Lambda functions by using Amazon Simple Notification Service (Amazon SNS).',
      'Set up two Lambda functions. Configure one function to receive the information. Configure the other function to load the information into the database. Integrate the Lambda functions by using an Amazon Simple Queue Service (Amazon SQS) queue.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'A company needs to review its AWS Cloud deployment to ensure that its Amazon S3 buckets do not have unauthorized configuration changes. What should a solutions architect do to accomplish this goal?',
    answers: [
      'Turn on AWS Config with the appropriate rules.',
      'Turn on AWS Trusted Advisor with the appropriate checks.',
      'Turn on Amazon Inspector with the appropriate assessment template.',
      'Turn on Amazon S3 server access logging. Configure Amazon EventBridge (Amazon CloudWatch Events).'
    ],
    correctAnswer: [0]
  },
  {
    question:
      "A company is launching a new application and will display application metrics on an Amazon CloudWatch dashboard. The company's product manager needs to access this dashboard periodically. The product manager does not have an AWS account. A solutions architect must provide access to the product manager by following the principle of least privilege. Which solution will meet these requirements?",
    answers: [
      "Share the dashboard from the CloudWatch console. Enter the product manager's email address, and complete the sharing steps. Provide a shareable link for the dashboard to the product manager.",
      'Create an IAM user specifically for the product manager. Attach the CloudWatchReadOnlyAccess AWS managed policy to the user. Share the new login credentials with the product manager. Share the browser URL of the correct dashboard with the product manager.',
      "Create an IAM user for the company's employees. Attach the ViewOnlyAccess AWS managed policy to the IAM user. Share the new login credentials with the product manager. Ask the product manager to navigate to the CloudWatch console and locate the dashboard by name in the Dashboards section.",
      'Deploy a bastion server in a public subnet. When the product manager requires access to the dashboard, start the server and share the RDP credentials. On the bastion server, ensure that the browser is configured to open the dashboard URL with cached AWS credentials that have appropriate permissions to view the dashboard.'
    ],
    correctAnswer: [0]
  },
  {
    question:
      "A company is migrating applications to AWS. The applications are deployed in different accounts. The company manages the accounts centrally by using AWS Organizations. The company's security team needs a single sign-on (SSO) solution across all the company's accounts. The company must continue managing the users and groups in its on-premises self-managed Microsoft Active Directory. Which solution will meet these requirements?",
    answers: [
      "Enable AWS Single Sign-On (AWS SSO) from the AWS SSO console. Create a one-way forest trust or a one-way domain trust to connect the company's self-managed Microsoft Active Directory with AWS SSO by using AWS Directory Service for Microsoft Active Directory.",
      "Enable AWS Single Sign-On (AWS SSO) from the AWS SSO console. Create a two-way forest trust to connect the company's self-managed Microsoft Active Directory with AWS SSO by using AWS Directory Service for Microsoft Active Directory.",
      "Use AWS Directory Service. Create a two-way trust relationship with the company's self-managed Microsoft Active Directory.",
      'Deploy an identity provider (IdP) on premises. Enable AWS Single Sign-On (AWS SSO) from the AWS SSO console.'
    ],
    correctAnswer: [0]
  },
  {
    question:
      'A company provides a Voice over Internet Protocol (VoIP) service that uses UDP connections. The service consists of Amazon EC2 instances that run in an Auto Scaling group. The company has deployments across multiple AWS Regions. The company needs to route users to the Region with the lowest latency. The company also needs automated failover between Regions. Which solution will meet these requirements?',
    answers: [
      'Deploy a Network Load Balancer (NLB) and an associated target group. Associate the target group with the Auto Scaling group. Use the NLB as an AWS Global Accelerator endpoint in each Region.',
      'Deploy an Application Load Balancer (ALB) and an associated target group. Associate the target group with the Auto Scaling group. Use the ALB as an AWS Global Accelerator endpoint in each Region.',
      'Deploy a Network Load Balancer (NLB) and an associated target group. Associate the target group with the Auto Scaling group. Create an Amazon Route 53 latency record that points to aliases for each NLB. Create an Amazon CloudFront distribution that uses the latency record as an origin.',
      'Deploy an Application Load Balancer (ALB) and an associated target group. Associate the target group with the Auto Scaling group. Create an Amazon Route 53 weighted record that points to aliases for each ALB. Deploy an Amazon CloudFront distribution that uses the weighted record as an origin.'
    ],
    correctAnswer: [0]
  },
  {
    question:
      'A development team runs monthly resource-intensive tests on its general purpose Amazon RDS for MySQL DB instance with Performance Insights enabled. The testing lasts for 48 hours once a month and is the only process that uses the database. The team wants to reduce the cost of running the tests without reducing the compute and memory attributes of the DB instance. Which solution meets these requirements MOST cost-effectively?',
    answers: [
      'Stop the DB instance when tests are completed. Restart the DB instance when required.',
      'Use an Auto Scaling policy with the DB instance to automatically scale when tests are completed.',
      'Create a snapshot when tests are completed. Terminate the DB instance and restore the snapshot when required.',
      'Modify the DB instance to a low-capacity instance when tests are completed. Modify the DB instance again when required.'
    ],
    correctAnswer: [0]
  },
  {
    question:
      'A company that hosts its web application on AWS wants to ensure all Amazon EC2 instances, Amazon RDS DB instances, and Amazon Redshift clusters are configured with tags. The company wants to minimize the effort of configuring and operating this check. What should a solutions architect do to accomplish this?',
    answers: [
      'Use AWS Config rules to define and detect resources that are not properly tagged.',
      'Use Cost Explorer to display resources that are not properly tagged. Tag those resources manually.',
      'Write API calls to check all resources for proper tag allocation. Periodically run the code on an EC2 instance.',
      'Write API calls to check all resources for proper tag allocation. Schedule an AWS Lambda function through Amazon CloudWatch to periodically run the code.'
    ],
    correctAnswer: [0]
  },
  {
    question:
      'A development team needs to host a website that will be accessed by other teams. The website contents consist of HTML, CSS, client-side JavaScript, and images. Which method is the MOST cost-effective for hosting the website?',
    answers: [
      'Containerize the website and host it in AWS Fargate.',
      'Create an Amazon S3 bucket and host the website there.',
      'Deploy a web server on an Amazon EC2 instance to host the website.',
      'Configure an Application Load Balancer with an AWS Lambda target that uses the Express.js framework.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'A company runs an online marketplace web application on AWS. The application serves hundreds of thousands of users during peak hours. The company needs a scalable, near-real-time solution to share the details of millions of financial transactions with several other internal applications. Transactions also need to be processed to remove sensitive data before being stored in a document database for low-latency retrieval. What should a solutions architect recommend to meet these requirements?',
    answers: [
      'Store the transactions data into Amazon DynamoDB. Set up a rule in DynamoDB to remove sensitive data from every transaction upon write. Use DynamoDB Streams to share the transactions data with other applications.',
      'Stream the transactions data into Amazon Kinesis Data Firehose to store data in Amazon DynamoDB and Amazon S3. Use AWS Lambda integration with Kinesis Data Firehose to remove sensitive data. Other applications can consume the data stored in Amazon S3.',
      'Stream the transactions data into Amazon Kinesis Data Streams. Use AWS Lambda integration to remove sensitive data from every transaction and then store the transactions data in Amazon DynamoDB. Other applications can consume the transactions data off the Kinesis data stream.',
      'Store the batched transactions data in Amazon S3 as files. Use AWS Lambda to process every file and remove sensitive data before updating the files in Amazon S3. The Lambda function then stores the data in Amazon DynamoDB. Other applications can consume transaction files stored in Amazon S3.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'A company hosts its multi-tier applications on AWS. For compliance, governance, auditing, and security, the company must track configuration changes on its AWS resources and record a history of API calls made to these resources. What should a solutions architect do to meet these requirements?',
    answers: [
      'Use AWS CloudTrail to track configuration changes and AWS Config to record API calls.',
      'Use AWS Config to track configuration changes and AWS CloudTrail to record API calls.',
      'Use AWS Config to track configuration changes and Amazon CloudWatch to record API calls.',
      'Use AWS CloudTrail to track configuration changes and Amazon CloudWatch to record API calls.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      "A company is preparing to launch a public-facing web application in the AWS Cloud. The architecture consists of Amazon EC2 instances within a VPC behind an Elastic Load Balancer (ELB). A third-party service is used for the DNS. The company's solutions architect must recommend a solution to detect and protect against large-scale DDoS attacks. Which solution meets these requirements?",
    answers: [
      'Enable Amazon GuardDuty on the account.',
      'Enable Amazon Inspector on the EC2 instances.',
      'Enable AWS Shield and assign Amazon Route 53 to it.',
      'Enable AWS Shield Advanced and assign the ELB to it.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'A company is building an application in the AWS Cloud. The application will store data in Amazon S3 buckets in two AWS Regions. The company must use an AWS Key Management Service (AWS KMS) customer managed key to encrypt all data that is stored in the S3 buckets. The data in both S3 buckets must be encrypted and decrypted with the same KMS key. The data and the key must be stored in each of the two Regions. Which solution will meet these requirements with the LEAST operational overhead?',
    answers: [
      'Create an S3 bucket in each Region. Configure the S3 buckets to use server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Configure replication between the S3 buckets.',
      'Create a customer managed multi-Region KMS key. Create an S3 bucket in each Region. Configure replication between the S3 buckets. Configure the application to use the KMS key with client-side encryption.',
      'Create a customer managed KMS key and an S3 bucket in each Region. Configure the S3 buckets to use server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Configure replication between the S3 buckets.',
      'Create a customer managed KMS key and an S3 bucket in each Region. Configure the S3 buckets to use server-side encryption with AWS KMS keys (SSE-KMS). Configure replication between the S3 buckets.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'A company recently launched a variety of new workloads on Amazon EC2 instances in its AWS account. The company needs to create a strategy to access and administer the instances remotely and securely. The company needs to implement a repeatable process that works with native AWS services and follows the AWS Well-Architected Framework. Which solution will meet these requirements with the LEAST operational overhead?',
    answers: [
      'Use the EC2 serial console to directly access the terminal interface of each instance for administration.',
      'Attach the appropriate IAM role to each existing instance and new instance. Use AWS Systems Manager Session Manager to establish a remote SSH session.',
      'Create an administrative SSH key pair. Load the public key into each EC2 instance. Deploy a bastion host in a public subnet to provide a tunnel for administration of each instance.',
      'Establish an AWS Site-to-Site VPN connection. Instruct administrators to use their local on-premises machines to connect directly to the instances by using SSH keys across the VPN tunnel.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'A company is hosting a static website on Amazon S3 and is using Amazon Route 53 for DNS. The website is experiencing increased demand from around the world. The company must decrease latency for users who access the website. Which solution meets these requirements MOST cost-effectively?',
    answers: [
      'Replicate the S3 bucket that contains the website to all AWS Regions. Add Route 53 geolocation routing entries.',
      'Provision accelerators in AWS Global Accelerator. Associate the supplied IP addresses with the S3 bucket. Edit the Route 53 entries to point to the IP addresses of the accelerators.',
      'Add an Amazon CloudFront distribution in front of the S3 bucket. Edit the Route 53 entries to point to the CloudFront distribution.',
      'Enable S3 Transfer Acceleration on the bucket. Edit the Route 53 entries to point to the new endpoint.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      "A company maintains a searchable repository of items on its website. The data is stored in an Amazon RDS for MySQL database table that contains more than 10 million rows. The database has 2 TB of General Purpose SSD storage. There are millions of updates against this data every day through the company's website. The company has noticed that some insert operations are taking 10 seconds or longer. The company has determined that the database storage performance is the problem. Which solution addresses this performance issue?",
    answers: [
      'Change the storage type to Provisioned IOPS SSD.',
      'Change the DB instance to a memory optimized instance class.',
      'Change the DB instance to a burstable performance instance class.',
      'Enable Multi-AZ RDS read replicas with MySQL native asynchronous replication.'
    ],
    correctAnswer: [0]
  },
  {
    question:
      'A company has thousands of edge devices that collectively generate 1 TB of status alerts each day. Each alert is approximately 2 KB in size. A solutions architect needs to implement a solution to ingest and store the alerts for future analysis. The company wants a highly available solution. However, the company needs to minimize costs and does not want to manage additional infrastructure. Additionally, the company wants to keep 14 days of data available for immediate analysis and archive any data older than 14 days. What is the MOST operationally efficient solution that meets these requirements?',
    answers: [
      'Create an Amazon Kinesis Data Firehose delivery stream to ingest the alerts. Configure the Kinesis Data Firehose stream to deliver the alerts to an Amazon S3 bucket. Set up an S3 Lifecycle configuration to transition data to Amazon S3 Glacier after 14 days.',
      'Launch Amazon EC2 instances across two Availability Zones and place them behind an Elastic Load Balancer to ingest the alerts. Create a script on the EC2 instances that will store the alerts in an Amazon S3 bucket. Set up an S3 Lifecycle configuration to transition data to Amazon S3 Glacier after 14 days.',
      'Create an Amazon Kinesis Data Firehose delivery stream to ingest the alerts. Configure the Kinesis Data Firehose stream to deliver the alerts to an Amazon OpenSearch Service (Amazon Elasticsearch Service) cluster. Set up the Amazon OpenSearch Service (Amazon Elasticsearch Service) cluster to take manual snapshots every day and delete data from the cluster that is older than 14 days.',
      'Create an Amazon Simple Queue Service (Amazon SQS) standard queue to ingest the alerts, and set the message retention period to 14 days. Configure consumers to poll the SQS queue, check the age of the message, and analyze the message data as needed. If the message is 14 days old, the consumer should copy the message to an Amazon S3 bucket and delete the message from the SQS queue.'
    ],
    correctAnswer: [0]
  },
  {
    question:
      "A company's application integrates with multiple SaaS sources for data collection using Amazon EC2 instances. The company has noticed slow application performance and wants to improve performance with the least operational overhead. What solution should the company implement?",
    answers: [
      'Create an Auto Scaling group for EC2 instances and configure an S3 event notification to send events to an SNS topic when the upload to the S3 bucket is complete.',
      'Create an Amazon AppFlow flow to transfer data between each SaaS source and the S3 bucket, and configure an S3 event notification to send events to an SNS topic when the upload to the S3 bucket is complete.',
      'Create an Amazon EventBridge rule for each SaaS source to send output data to an S3 bucket, and create a second EventBridge rule to send events to an SNS topic when the upload to the S3 bucket is complete.',
      'Create a Docker container to use instead of an EC2 instance, host the containerized application on Amazon ECS, and configure CloudWatch Container Insights to send events to an SNS topic when the upload to the S3 bucket is complete.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'A company runs a highly available image-processing application on EC2 instances in a single VPC, communicating with Amazon S3 through a single NAT gateway. To avoid Regional data transfer charges, what is the most cost-effective solution?',
    answers: [
      'Launch the NAT gateway in each Availability Zone.',
      'Replace the NAT gateway with a NAT instance.',
      'Deploy a gateway VPC endpoint for Amazon S3.',
      'Provision an EC2 Dedicated Host to run the EC2 instances.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'A company with an on-premises application that generates a large amount of time-sensitive data is facing bandwidth limitations. What is a long-term solution for timely backups to Amazon S3 with minimal impact on internet connectivity for internal users?',
    answers: [
      'Establish AWS VPN connections and proxy all traffic through a VPC gateway endpoint.',
      'Establish a new AWS Direct Connect connection and direct backup traffic through this new connection.',
      'Order daily AWS Snowball devices, load the data onto the devices, and return them to AWS each day.',
      'Submit a support ticket to request the removal of S3 service limits from the account.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'A company has an Amazon S3 bucket with critical data that must be protected from accidental deletion. Which combination of steps should be taken to meet these requirements? (Choose two.)',
    answers: [
      'Enable versioning on the S3 bucket.',
      'Enable MFA Delete on the S3 bucket.',
      'Create a bucket policy on the S3 bucket.',
      'Enable default encryption on the S3 bucket.',
      'Create a lifecycle policy for the objects in the S3 bucket.'
    ],
    correctAnswer: [0, 1]
  },
  {
    question:
      "A company's data ingestion workflow fails occasionally due to network connectivity issues, causing missed data ingestion unless the job is manually rerun. What actions should be taken to ensure that the Lambda function ingests all data in the future? (Choose two.)",
    answers: [
      'Deploy the Lambda function in multiple Availability Zones.',
      'Create an SQS queue and subscribe it to the SNS topic.',
      'Increase the CPU and memory allocated to the Lambda function.',
      'Increase provisioned throughput for the Lambda function.',
      'Modify the Lambda function to read from an SQS queue.'
    ],
    correctAnswer: [1, 4]
  },
  {
    question:
      'A company providing marketing services has discovered that stores have uploaded files containing PII. What should a solutions architect do to alert administrators if PII is shared again and automate remediation with the least development effort?',
    answers: [
      'Use an Amazon S3 bucket as a secure transfer point and Amazon Inspector to scan the objects, triggering an S3 Lifecycle policy to remove objects containing PII.',
      'Use an Amazon S3 bucket as a secure transfer point and Amazon Macie to scan the objects, triggering an SNS notification to administrators to remove objects containing PII.',
      'Implement custom scanning algorithms in a Lambda function triggered by object uploads, using SNS to notify administrators to remove objects containing PII.',
      'Implement custom scanning algorithms in a Lambda function triggered by object uploads, using SES to notify administrators and trigger an S3 Lifecycle policy to remove objects containing PII.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'A company needs guaranteed EC2 capacity in three specific Availability Zones in a specific AWS Region for an upcoming week-long event. What should the company do to guarantee the EC2 capacity?',
    answers: [
      'Purchase Reserved Instances that specify the Region needed.',
      'Create an On-Demand Capacity Reservation that specifies the Region needed.',
      'Purchase Reserved Instances that specify the Region and three Availability Zones needed.',
      'Create an On-Demand Capacity Reservation that specifies the Region and three Availability Zones needed.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      "A company's website uses an EC2 instance store for its catalog of items and wants to ensure high availability and durability. What should a solutions architect do to meet these requirements?",
    answers: [
      'Move the catalog to Amazon ElastiCache for Redis.',
      'Deploy a larger EC2 instance with a larger instance store.',
      'Move the catalog from the instance store to Amazon S3 Glacier Deep Archive.',
      'Move the catalog to an Amazon EFS file system.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'A company stores call transcript files that are accessed frequently within the first year but infrequently after. Users need quick access to files less than a year old, with a delay acceptable for older files. What is the most cost-effective solution?',
    answers: [
      'Store files with tags in S3 Glacier Instant Retrieval and query tags to retrieve files.',
      'Store files in S3 Intelligent-Tiering and use S3 Lifecycle policies to move files to S3 Glacier Flexible Retrieval after 1 year, querying and retrieving files using Athena and S3 Glacier Select.',
      'Store files with tags in S3 Standard storage, using S3 Lifecycle policies to move files to S3 Glacier Instant Retrieval after 1 year, querying and retrieving files by searching metadata from S3.',
      'Store files in S3 Standard storage, using S3 Lifecycle policies to move files to S3 Glacier Deep Archive after 1 year, storing search metadata in RDS, and retrieving files from RDS and S3 Glacier Deep Archive.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'A company needs to patch third-party software on 1,000 EC2 Linux instances quickly to remediate a critical security vulnerability. What should a solutions architect do to meet these requirements?',
    answers: [
      'Create an AWS Lambda function to apply the patch to all EC2 instances.',
      'Configure AWS Systems Manager Patch Manager to apply the patch to all EC2 instances.',
      'Schedule an AWS Systems Manager maintenance window to apply the patch to all EC2 instances.',
      'Use AWS Systems Manager Run Command to run a custom command that applies the patch to all EC2 instances.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'A company is developing an application that provides order shipping statistics for retrieval by a REST API. The company wants to extract the shipping statistics, organize the data into an easy-to-read HTML format, and send the report to several email addresses at the same time every morning. Which combination of steps should a solutions architect take to meet these requirements? (Choose two.)',
    answers: [
      'Configure the application to send the data to Amazon Kinesis Data Firehose.',
      'Use Amazon Simple Email Service (Amazon SES) to format the data and to send the report by email.',
      "Create an Amazon EventBridge (Amazon CloudWatch Events) scheduled event that invokes an AWS Glue job to query the application's API for the data.",
      "Create an Amazon EventBridge (Amazon CloudWatch Events) scheduled event that invokes an AWS Lambda function to query the application's API for the data.",
      'Store the application data in Amazon S3. Create an Amazon Simple Notification Service (Amazon SNS) topic as an S3 event destination to send the report by email.'
    ],
    correctAnswer: [1, 3]
  },
  {
    question:
      'A company wants to migrate its on-premises application to AWS. The application produces output files that vary in size from tens of gigabytes to hundreds of terabytes. The application data must be stored in a standard file system structure. The company wants a solution that scales automatically, is highly available, and requires minimum operational overhead. Which solution will meet these requirements?',
    answers: [
      'Migrate the application to run as containers on Amazon Elastic Container Service (Amazon ECS). Use Amazon S3 for storage.',
      'Migrate the application to run as containers on Amazon Elastic Kubernetes Service (Amazon EKS). Use Amazon Elastic Block Store (Amazon EBS) for storage.',
      'Migrate the application to Amazon EC2 instances in a Multi-AZ Auto Scaling group. Use Amazon Elastic File System (Amazon EFS) for storage.',
      'Migrate the application to Amazon EC2 instances in a Multi-AZ Auto Scaling group. Use Amazon Elastic Block Store (Amazon EBS) for storage.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'A company needs to store its accounting records in Amazon S3. The records must be immediately accessible for 1 year and then must be archived for an additional 9 years. No one at the company, including administrative users and root users, can be able to delete the records during the entire 10-year period. The records must be stored with maximum resiliency. Which solution will meet these requirements?',
    answers: [
      'Store the records in S3 Glacier for the entire 10-year period. Use an access control policy to deny deletion of the records for a period of 10 years.',
      'Store the records by using S3 Intelligent-Tiering. Use an IAM policy to deny deletion of the records. After 10 years, change the IAM policy to allow deletion.',
      'Use an S3 Lifecycle policy to transition the records from S3 Standard to S3 Glacier Deep Archive after 1 year. Use S3 Object Lock in compliance mode for a period of 10 years.',
      'Use an S3 Lifecycle policy to transition the records from S3 Standard to S3 One Zone-Infrequent Access (S3 One Zone-IA) after 1 year. Use S3 Object Lock in governance mode for a period of 10 years.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      "A company runs multiple Windows workloads on AWS. The company's employees use Windows file shares that are hosted on two Amazon EC2 instances. The file shares synchronize data between themselves and maintain duplicate copies. The company wants a highly available and durable storage solution that preserves how users currently access the files. What should a solutions architect do to meet these requirements?",
    answers: [
      'Migrate all the data to Amazon S3. Set up IAM authentication for users to access files.',
      'Set up an Amazon S3 File Gateway. Mount the S3 File Gateway on the existing EC2 instances.',
      'Extend the file share environment to Amazon FSx for Windows File Server with a Multi-AZ configuration. Migrate all the data to FSx for Windows File Server.',
      'Extend the file share environment to Amazon Elastic File System (Amazon EFS) with a Multi-AZ configuration. Migrate all the data to Amazon EFS.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'A solutions architect is developing a VPC architecture that includes multiple subnets. The architecture will host applications that use Amazon EC2 instances and Amazon RDS DB instances. The architecture consists of six subnets in two Availability Zones. Each Availability Zone includes a public subnet, a private subnet, and a dedicated subnet for databases. Only EC2 instances that run in the private subnets can have access to the RDS databases. Which solution will meet these requirements?',
    answers: [
      "Create a new route table that excludes the route to the public subnets' CIDR blocks. Associate the route table with the database subnets.",
      'Create a security group that denies inbound traffic from the security group that is assigned to instances in the public subnets. Attach the security group to the DB instances.',
      'Create a security group that allows inbound traffic from the security group that is assigned to instances in the private subnets. Attach the security group to the DB instances.',
      'Create a new peering connection between the public subnets and the private subnets. Create a different peering connection between the private subnets and the database subnets.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      "A company has registered its domain name with Amazon Route 53. The company uses Amazon API Gateway in the ca-central-1 Region as a public interface for its backend microservice APIs. Third-party services consume the APIs securely. The company wants to design its API Gateway URL with the company's domain name and corresponding certificate so that the third-party services can use HTTPS. Which solution will meet these requirements?",
    answers: [
      'Create stage variables in API Gateway with Name="Endpoint-URL" and Value="Company Domain Name" to overwrite the default URL. Import the public certificate associated with the company\'s domain name into AWS Certificate Manager (ACM).',
      "Create Route 53 DNS records with the company's domain name. Point the alias record to the Regional API Gateway stage endpoint. Import the public certificate associated with the company's domain name into AWS Certificate Manager (ACM) in the us-east-1 Region.",
      "Create a Regional API Gateway endpoint. Associate the API Gateway endpoint with the company's domain name. Import the public certificate associated with the company's domain name into AWS Certificate Manager (ACM) in the same Region. Attach the certificate to the API Gateway endpoint. Configure Route 53 to route traffic to the API Gateway endpoint.",
      "Create a Regional API Gateway endpoint. Associate the API Gateway endpoint with the company's domain name. Import the public certificate associated with the company's domain name into AWS Certificate Manager (ACM) in the us-east-1 Region. Attach the certificate to the API Gateway APIs. Create Route 53 DNS records with the company's domain name. Point an A record to the company's domain name."
    ],
    correctAnswer: [2]
  },
  {
    question:
      'A company is running a popular social media website. The website gives users the ability to upload images to share with other users. The company wants to make sure that the images do not contain inappropriate content. The company needs a solution that minimizes development effort. What should a solutions architect do to meet these requirements?',
    answers: [
      'Use Amazon Comprehend to detect inappropriate content. Use human review for low-confidence predictions.',
      'Use Amazon Rekognition to detect inappropriate content. Use human review for low-confidence predictions.',
      'Use Amazon SageMaker to detect inappropriate content. Use ground truth to label low-confidence predictions.',
      'Use AWS Fargate to deploy a custom machine learning model to detect inappropriate content. Use ground truth to label low-confidence predictions.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'A company wants to run its critical applications in containers to meet requirements for scalability and availability. The company prefers to focus on maintenance of the critical applications. The company does not want to be responsible for provisioning and managing the underlying infrastructure that runs the containerized workload. What should a solutions architect do to meet these requirements?',
    answers: [
      'Use Amazon EC2 instances, and install Docker on the instances.',
      'Use Amazon Elastic Container Service (Amazon ECS) on Amazon EC2 worker nodes.',
      'Use Amazon Elastic Container Service (Amazon ECS) on AWS Fargate.',
      'Use Amazon EC2 instances from an Amazon Elastic Container Service (Amazon ECS)-optimized Amazon Machine Image (AMI).'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'A company hosts more than 300 global websites and applications. The company requires a platform to analyze more than 30 TB of clickstream data each day. What should a solutions architect do to transmit and process the clickstream data?',
    answers: [
      'Design an AWS Data Pipeline to archive the data to an Amazon S3 bucket and run an Amazon EMR cluster with the data to generate analytics.',
      'Create an Auto Scaling group of Amazon EC2 instances to process the data and send it to an Amazon S3 data lake for Amazon Redshift to use for analysis.',
      'Cache the data to Amazon CloudFront. Store the data in an Amazon S3 bucket. When an object is added to the S3 bucket, run an AWS Lambda function to process the data for analysis.',
      'Collect the data from Amazon Kinesis Data Streams. Use Amazon Kinesis Data Firehose to transmit the data to an Amazon S3 data lake. Load the data in Amazon Redshift for analysis.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'A company has a website hosted on AWS. The website is behind an Application Load Balancer (ALB) that is configured to handle HTTP and HTTPS separately. The company wants to forward all requests to the website so that the requests will use HTTPS. What should a solutions architect do to meet this requirement?',
    answers: [
      "Update the ALB's network ACL to accept only HTTPS traffic.",
      'Create a rule that replaces the HTTP in the URL with HTTPS.',
      'Create a listener rule on the ALB to redirect HTTP traffic to HTTPS.',
      'Replace the ALB with a Network Load Balancer configured to use Server Name Indication (SNI).'
    ],
    correctAnswer: [2]
  },
  {
    question:
      "A company is developing a two-tier web application on AWS. The company's developers have deployed the application on an Amazon EC2 instance that connects directly to a backend Amazon RDS database. The company must not hardcode database credentials in the application. The company must also implement a solution to automatically rotate the database credentials on a regular basis. Which solution will meet these requirements with the LEAST operational overhead?",
    answers: [
      'Store the database credentials in the instance metadata. Use Amazon EventBridge (Amazon CloudWatch Events) rules to run a scheduled AWS Lambda function that updates the RDS credentials and instance metadata at the same time.',
      'Store the database credentials in a configuration file in an encrypted Amazon S3 bucket. Use Amazon EventBridge (Amazon CloudWatch Events) rules to run a scheduled AWS Lambda function that updates the RDS credentials and the credentials in the configuration file at the same time. Use S3 Versioning to ensure the ability to fall back to previous values.',
      'Store the database credentials as a secret in AWS Secrets Manager. Turn on automatic rotation for the secret. Attach the required permission to the EC2 role to grant access to the secret.',
      'Store the database credentials as encrypted parameters in AWS Systems Manager Parameter Store. Turn on automatic rotation for the encrypted parameters. Attach the required permission to the EC2 role to grant access to the encrypted parameters.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'A company is deploying a new public web application to AWS. The application will run behind an Application Load Balancer (ALB). The application needs to be encrypted at the edge with an SSL/TLS certificate that is issued by an external certificate authority (CA). The certificate must be rotated each year before the certificate expires. What should a solutions architect do to meet these requirements?',
    answers: [
      'Use AWS Certificate Manager (ACM) to issue an SSL/TLS certificate. Apply the certificate to the ALB. Use the managed renewal feature to automatically rotate the certificate.',
      'Use AWS Certificate Manager (ACM) to issue an SSL/TLS certificate. Import the key material from the certificate. Apply the certificate to the ALUse the managed renewal feature to automatically rotate the certificate.',
      'Use AWS Certificate Manager (ACM) Private Certificate Authority to issue an SSL/TLS certificate from the root CA. Apply the certificate to the ALB. Use the managed renewal feature to automatically rotate the certificate.',
      'Use AWS Certificate Manager (ACM) to import an SSL/TLS certificate. Apply the certificate to the ALB. Use Amazon EventBridge (Amazon CloudWatch Events) to send a notification when the certificate is nearing expiration. Rotate the certificate manually.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'A company runs its infrastructure on AWS and has a registered base of 700,000 users for its document management application. The company intends to create a product that converts large .pdf files to .jpg image files. The .pdf files average 5 MB in size. The company needs to store the original files and the converted files. A solutions architect must design a scalable solution to accommodate demand that will grow rapidly over time. Which solution meets these requirements MOST cost-effectively?',
    answers: [
      'Save the .pdf files to Amazon S3. Configure an S3 PUT event to invoke an AWS Lambda function to convert the files to .jpg format and store them back in Amazon S3.',
      'Save the .pdf files to Amazon DynamoDUse the DynamoDB Streams feature to invoke an AWS Lambda function to convert the files to .jpg format and store them back in DynamoDB.',
      'Upload the .pdf files to an AWS Elastic Beanstalk application that includes Amazon EC2 instances, Amazon Elastic Block Store (Amazon EBS) storage, and an Auto Scaling group. Use a program in the EC2 instances to convert the files to .jpg format. Save the .pdf files and the .jpg files in the EBS store.',
      'Upload the .pdf files to an AWS Elastic Beanstalk application that includes Amazon EC2 instances, Amazon Elastic File System (Amazon EFS) storage, and an Auto Scaling group. Use a program in the EC2 instances to convert the file to .jpg format. Save the .pdf files and the .jpg files in the EBS store.'
    ],
    correctAnswer: [0]
  },
  {
    question:
      'A company has more than 5 TB of file data on Windows file servers that run on premises. Users and applications interact with the data each day. The company is moving its Windows workloads to AWS. As the company continues this process, the company requires access to AWS and on-premises file storage with minimum latency. The company needs a solution that minimizes operational overhead and requires no significant changes to the existing file access patterns. The company uses an AWS Site-to-Site VPN connection for connectivity to AWS. What should a solutions architect do to meet these requirements?',
    answers: [
      'Deploy and configure Amazon FSx for Windows File Server on AWS. Move the on-premises file data to FSx for Windows File Server. Reconfigure the workloads to use FSx for Windows File Server on AWS.',
      'Deploy and configure an Amazon S3 File Gateway on premises. Move the on-premises file data to the S3 File Gateway. Reconfigure the on-premises workloads and the cloud workloads to use the S3 File Gateway.',
      "Deploy and configure an Amazon S3 File Gateway on premises. Move the on-premises file data to Amazon S3. Reconfigure the workloads to use either Amazon S3 directly or the S3 File Gateway, depending on each workload's location.",
      'Deploy and configure Amazon FSx for Windows File Server on AWS. Deploy and configure an Amazon FSx File Gateway on premises. Move the on-premises file data to the FSx File Gateway. Configure the cloud workloads to use FSx for Windows File Server on AWS. Configure the on-premises workloads to use the FSx File Gateway.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'A hospital recently deployed a RESTful API with Amazon API Gateway and AWS Lambda. The hospital uses API Gateway and Lambda to upload reports that are in PDF format and JPEG format. The hospital needs to modify the Lambda code to identify protected health information (PHI) in the reports. Which solution will meet these requirements with the LEAST operational overhead?',
    answers: [
      'Use existing Python libraries to extract the text from the reports and to identify the PHI from the extracted text.',
      'Use Amazon Textract to extract the text from the reports. Use Amazon SageMaker to identify the PHI from the extracted text.',
      'Use Amazon Textract to extract the text from the reports. Use Amazon Comprehend Medical to identify the PHI from the extracted text.',
      'Use Amazon Rekognition to extract the text from the reports. Use Amazon Comprehend Medical to identify the PHI from the extracted text.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'A company has an application that generates a large number of files, each approximately 5 MB in size. The files are stored in Amazon S3. Company policy requires the files to be stored for 4 years before they can be deleted. Immediate accessibility is always required as the files contain critical business data that is not easy to reproduce. The files are frequently accessed in the first 30 days of the object creation but are rarely accessed after the first 30 days. Which storage solution is MOST cost-effective?',
    answers: [
      'Create an S3 bucket lifecycle policy to move files from S3 Standard to S3 Glacier 30 days from object creation. Delete the files 4 years after object creation.',
      'Create an S3 bucket lifecycle policy to move files from S3 Standard to S3 One Zone-Infrequent Access (S3 One Zone-IA) 30 days from object creation. Delete the files 4 years after object creation.',
      'Create an S3 bucket lifecycle policy to move files from S3 Standard to S3 Standard-Infrequent Access (S3 Standard-IA) 30 days from object creation. Delete the files 4 years after object creation.',
      'Create an S3 bucket lifecycle policy to move files from S3 Standard to S3 Standard-Infrequent Access (S3 Standard-IA) 30 days from object creation. Move the files to S3 Glacier 4 years after object creation.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'A company hosts an application on multiple Amazon EC2 instances. The application processes messages from an Amazon SQS queue, writes to an Amazon RDS table, and deletes the message from the queue. Occasional duplicate records are found in the RDS table. The SQS queue does not contain any duplicate messages. What should a solutions architect do to ensure messages are being processed once only?',
    answers: [
      'Use the CreateQueue API call to create a new queue.',
      'Use the AddPermission API call to add appropriate permissions.',
      'Use the ReceiveMessage API call to set an appropriate wait time.',
      'Use the ChangeMessageVisibility API call to increase the visibility timeout.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      "A solutions architect is designing a new hybrid architecture to extend a company's on-premises infrastructure to AWS. The company requires a highly available connection with consistent low latency to an AWS Region. The company needs to minimize costs and is willing to accept slower traffic if the primary connection fails. What should the solutions architect do to meet these requirements?",
    answers: [
      'Provision an AWS Direct Connect connection to a Region. Provision a VPN connection as a backup if the primary Direct Connect connection fails.',
      'Provision a VPN tunnel connection to a Region for private connectivity. Provision a second VPN tunnel for private connectivity and as a backup if the primary VPN connection fails.',
      'Provision an AWS Direct Connect connection to a Region. Provision a second Direct Connect connection to the same Region as a backup if the primary Direct Connect connection fails.',
      'Provision an AWS Direct Connect connection to a Region. Use the Direct Connect failover attribute from the AWS CLI to automatically create a backup connection if the primary Direct Connect connection fails.'
    ],
    correctAnswer: [0]
  },
  {
    question:
      'A company is running a business-critical web application on Amazon EC2 instances behind an Application Load Balancer. The EC2 instances are in an Auto Scaling group. The application uses an Amazon Aurora PostgreSQL database that is deployed in a single Availability Zone. The company wants the application to be highly available with minimum downtime and minimum loss of data. Which solution will meet these requirements with the LEAST operational effort?',
    answers: [
      'Place the EC2 instances in different AWS Regions. Use Amazon Route 53 health checks to redirect traffic. Use Aurora PostgreSQL Cross-Region Replication.',
      'Configure the Auto Scaling group to use multiple Availability Zones. Configure the database as Multi-AZ. Configure an Amazon RDS Proxy instance for the database.',
      'Configure the Auto Scaling group to use one Availability Zone. Generate hourly snapshots of the database. Recover the database from the snapshots in the event of a failure.',
      'Configure the Auto Scaling group to use multiple AWS Regions. Write the data from the application to Amazon S3. Use S3 Event Notifications to launch an AWS Lambda function to write the data to the database.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      "A company's HTTP application is behind a Network Load Balancer (NLB). The NLB's target group is configured to use an Amazon EC2 Auto Scaling group with multiple EC2 instances that run the web service. The company notices that the NLB is not detecting HTTP errors for the application. These errors require a manual restart of the EC2 instances that run the web service. The company needs to improve the application's availability without writing custom scripts or code. What should a solutions architect do to meet these requirements?",
    answers: [
      "Enable HTTP health checks on the NLB, supplying the URL of the company's application.",
      "Add a cron job to the EC2 instances to check the local application's logs once each minute. If HTTP errors are detected. the application will restart.",
      "Replace the NLB with an Application Load Balancer. Enable HTTP health checks by supplying the URL of the company's application. Configure an Auto Scaling action to replace unhealthy instances.",
      'Create an Amazon Cloud Watch alarm that monitors the UnhealthyHostCount metric for the NLB. Configure an Auto Scaling action to replace unhealthy instances when the alarm is in the ALARM state.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'A company runs a shopping application that uses Amazon DynamoDB to store customer information. In case of data corruption, a solutions architect needs to design a solution that meets a recovery point objective (RPO) of 15 minutes and a recovery time objective (RTO) of 1 hour. What should the solutions architect recommend to meet these requirements?',
    answers: [
      'Configure DynamoDB global tables. For RPO recovery, point the application to a different AWS Region.',
      'Configure DynamoDB point-in-time recovery. For RPO recovery, restore to the desired point in time.',
      'Export the DynamoDB data to Amazon S3 Glacier on a daily basis. For RPO recovery, import the data from S3 Glacier to DynamoDB.',
      'Schedule Amazon Elastic Block Store (Amazon EBS) snapshots for the DynamoDB table every 15 minutes. For RPO recovery, restore the DynamoDB table by using the EBS snapshot.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'A company runs a photo processing application that needs to frequently upload and download pictures from Amazon S3 buckets that are located in the same AWS Region. A solutions architect has noticed an increased cost in data transfer fees and needs to implement a solution to reduce these costs. How can the solutions architect meet this requirement?',
    answers: [
      'Deploy Amazon API Gateway into a public subnet and adjust the route table to route S3 calls through it.',
      'Deploy a NAT gateway into a public subnet and attach an endpoint policy that allows access to the S3 buckets.',
      'Deploy the application into a public subnet and allow it to route through an internet gateway to access the S3 buckets.',
      'Deploy an S3 VPC gateway endpoint into the VPC and attach an endpoint policy that allows access to the S3 buckets.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      "A company recently launched Linux-based application instances on Amazon EC2 in a private subnet and launched a Linux-based bastion host on an Amazon EC2 instance in a public subnet of a VPC. A solutions architect needs to connect from the on-premises network, through the company's internet connection, to the bastion host, and to the application servers. The solutions architect must make sure that the security groups of all the EC2 instances will allow that access. Which combination of steps should the solutions architect take to meet these requirements? (Choose two.)",
    answers: [
      'Replace the current security group of the bastion host with one that only allows inbound access from the application instances.',
      'Replace the current security group of the bastion host with one that only allows inbound access from the internal IP range for the company.',
      'Replace the current security group of the bastion host with one that only allows inbound access from the external IP range for the company.',
      'Replace the current security group of the application instances with one that allows inbound SSH access from only the private IP address of the bastion host.',
      'Replace the current security group of the application instances with one that allows inbound SSH access from only the public IP address of the bastion host.'
    ],
    correctAnswer: [2, 3]
  },
  {
    question:
      'A solutions architect is designing a two-tier web application. The application consists of a public-facing web tier hosted on Amazon EC2 in public subnets. The database tier consists of Microsoft SQL Server running on Amazon EC2 in a private subnet. Security is a high priority for the company. How should security groups be configured in this situation? (Choose two.)',
    answers: [
      'Configure the security group for the web tier to allow inbound traffic on port 443 from 0.0.0.0/0.',
      'Configure the security group for the web tier to allow outbound traffic on port 443 from 0.0.0.0/0.',
      'Configure the security group for the database tier to allow inbound traffic on port 1433 from the security group for the web tier.',
      'Configure the security group for the database tier to allow outbound traffic on ports 443 and 1433 to the security group for the web tier.',
      'Configure the security group for the database tier to allow inbound traffic on ports 443 and 1433 from the security group for the web tier.'
    ],
    correctAnswer: [0, 2]
  },
  {
    question:
      "A company wants to move a multi-tiered application from on premises to the AWS Cloud to improve the application's performance. The application consists of application tiers that communicate with each other by way of RESTful services. Transactions are dropped when one tier becomes overloaded. A solutions architect must design a solution that resolves these issues and modernizes the application. Which solution meets these requirements and is the MOST operationally efficient?",
    answers: [
      'Use Amazon API Gateway and direct transactions to the AWS Lambda functions as the application layer. Use Amazon Simple Queue Service (Amazon SQS) as the communication layer between application services.',
      "Use Amazon CloudWatch metrics to analyze the application performance history to determine the servers' peak utilization during the performance failures. Increase the size of the application server's Amazon EC2 instances to meet the peak requirements.",
      'Use Amazon Simple Notification Service (Amazon SNS) to handle the messaging between application servers running on Amazon EC2 in an Auto Scaling group. Use Amazon CloudWatch to monitor the SNS queue length and scale up and down as required.',
      'Use Amazon Simple Queue Service (Amazon SQS) to handle the messaging between application servers running on Amazon EC2 in an Auto Scaling group. Use Amazon CloudWatch to monitor the SQS queue length and scale up when communication failures are detected.'
    ],
    correctAnswer: [0]
  },
  {
    question:
      'A company receives 10 TB of instrumentation data each day from several machines located at a single factory. The data consists of JSON files stored on a storage area network (SAN) in an on-premises data center located within the factory. The company wants to send this data to Amazon S3 where it can be accessed by several additional systems that provide critical near-real-time analytics. A secure transfer is important because the data is considered sensitive. Which solution offers the MOST reliable data transfer?',
    answers: [
      'AWS DataSync over public internet',
      'AWS DataSync over AWS Direct Connect',
      'AWS Database Migration Service (AWS DMS) over public internet',
      'AWS Database Migration Service (AWS DMS) over AWS Direct Connect'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'A company needs to configure a real-time data ingestion architecture for its application. The company needs an API, a process that transforms data as the data is streamed, and a storage solution for the data. Which solution will meet these requirements with the LEAST operational overhead?',
    answers: [
      'Deploy an Amazon EC2 instance to host an API that sends data to an Amazon Kinesis data stream. Create an Amazon Kinesis Data Firehose delivery stream that uses the Kinesis data stream as a data source. Use AWS Lambda functions to transform the data. Use the Kinesis Data Firehose delivery stream to send the data to Amazon S3.',
      'Deploy an Amazon EC2 instance to host an API that sends data to AWS Glue. Stop source/destination checking on the EC2 instance. Use AWS Glue to transform the data and to send the data to Amazon S3.',
      'Configure an Amazon API Gateway API to send data to an Amazon Kinesis data stream. Create an Amazon Kinesis Data Firehose delivery stream that uses the Kinesis data stream as a data source. Use AWS Lambda functions to transform the data. Use the Kinesis Data Firehose delivery stream to send the data to Amazon S3.',
      'Configure an Amazon API Gateway API to send data to AWS Glue. Use AWS Lambda functions to transform the data. Use AWS Glue to send the data to Amazon S3.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'A company needs to keep user transaction data in an Amazon DynamoDB table. The company must retain the data for 7 years. What is the MOST operationally efficient solution that meets these requirements?',
    answers: [
      'Use DynamoDB point-in-time recovery to back up the table continuously.',
      'Use AWS Backup to create backup schedules and retention policies for the table.',
      'Create an on-demand backup of the table by using the DynamoDB console. Store the backup in an Amazon S3 bucket. Set an S3 Lifecycle configuration for the S3 bucket.',
      'Create an Amazon EventBridge (Amazon CloudWatch Events) rule to invoke an AWS Lambda function. Configure the Lambda function to back up the table and to store the backup in an Amazon S3 bucket. Set an S3 Lifecycle configuration for the S3 bucket.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'A company is planning to use an Amazon DynamoDB table for data storage. The company is concerned about cost optimization. The table will not be used on most mornings. In the evenings, the read and write traffic will often be unpredictable. When traffic spikes occur, they will happen very quickly. What should a solutions architect recommend?',
    answers: [
      'Create a DynamoDB table in on-demand capacity mode.',
      'Create a DynamoDB table with a global secondary index.',
      'Create a DynamoDB table with provisioned capacity and auto scaling.',
      'Create a DynamoDB table in provisioned capacity mode, and configure it as a global table.'
    ],
    correctAnswer: [0]
  },
  {
    question:
      "A company recently signed a contract with an AWS Managed Service Provider (MSP) Partner for help with an application migration initiative. A solutions architect needs to share an Amazon Machine Image (AMI) from an existing AWS account with the MSP Partner's AWS account. The AMI is backed by Amazon Elastic Block Store (Amazon EBS) and uses an AWS Key Management Service (AWS KMS) customer managed key to encrypt EBS volume snapshots. What is the MOST secure way for the solutions architect to share the AMI with the MSP Partner's AWS account?",
    answers: [
      "Make the encrypted AMI and snapshots publicly available. Modify the key policy to allow the MSP Partner's AWS account to use the key.",
      "Modify the launchPermission property of the AMI. Share the AMI with the MSP Partner's AWS account only. Modify the key policy to allow the MSP Partner's AWS account to use the key.",
      "Modify the launchPermission property of the AMI. Share the AMI with the MSP Partner's AWS account only. Modify the key policy to trust a new KMS key that is owned by the MSP Partner for encryption.",
      "Export the AMI from the source account to an Amazon S3 bucket in the MSP Partner's AWS account, Encrypt the S3 bucket with a new KMS key that is owned by the MSP Partner. Copy and launch the AMI in the MSP Partner's AWS account."
    ],
    correctAnswer: [1]
  },
  {
    question:
      'A solutions architect is designing the cloud architecture for a new application being deployed on AWS. The process should run in parallel while adding and removing application nodes as needed based on the number of jobs to be processed. The processor application is stateless. The solutions architect must ensure that the application is loosely coupled and the job items are durably stored. Which design should the solutions architect use?',
    answers: [
      'Create an Amazon SNS topic to send the jobs that need to be processed. Create an Amazon Machine Image (AMI) that consists of the processor application. Create a launch configuration that uses the AMI. Create an Auto Scaling group using the launch configuration. Set the scaling policy for the Auto Scaling group to add and remove nodes based on CPU usage.',
      'Create an Amazon SQS queue to hold the jobs that need to be processed. Create an Amazon Machine Image (AMI) that consists of the processor application. Create a launch configuration that uses the AMI. Create an Auto Scaling group using the launch configuration. Set the scaling policy for the Auto Scaling group to add and remove nodes based on network usage.',
      'Create an Amazon SQS queue to hold the jobs that need to be processed. Create an Amazon Machine Image (AMI) that consists of the processor application. Create a launch template that uses the AMI. Create an Auto Scaling group using the launch template. Set the scaling policy for the Auto Scaling group to add and remove nodes based on the number of items in the SQS queue.',
      'Create an Amazon SNS topic to send the jobs that need to be processed. Create an Amazon Machine Image (AMI) that consists of the processor application. Create a launch template that uses the AMI. Create an Auto Scaling group using the launch template. Set the scaling policy for the Auto Scaling group to add and remove nodes based on the number of messages published to the SNS topic.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      "A company hosts its web applications in the AWS Cloud. The company configures Elastic Load Balancers to use certificates that are imported into AWS Certificate Manager (ACM). The company's security team must be notified 30 days before the expiration of each certificate. What should a solutions architect recommend to meet this requirement?",
    answers: [
      'Add a rule in ACM to publish a custom message to an Amazon Simple Notification Service (Amazon SNS) topic every day, beginning 30 days before any certificate will expire.',
      'Create an AWS Config rule that checks for certificates that will expire within 30 days. Configure Amazon EventBridge (Amazon CloudWatch Events) to invoke a custom alert by way of Amazon Simple Notification Service (Amazon SNS) when AWS Config reports a noncompliant resource.',
      'Use AWS Trusted Advisor to check for certificates that will expire within 30 days. Create an Amazon CloudWatch alarm that is based on Trusted Advisor metrics for check status changes. Configure the alarm to send a custom alert by way of Amazon Simple Notification Service (Amazon SNS).',
      'Create an Amazon EventBridge (Amazon CloudWatch Events) rule to detect any certificates that will expire within 30 days. Configure the rule to invoke an AWS Lambda function. Configure the Lambda function to send a custom alert by way of Amazon Simple Notification Service (Amazon SNS).'
    ],
    correctAnswer: [1]
  },
  {
    question:
      "A company's dynamic website is hosted using on-premises servers in the United States. The company is launching its product in Europe, and it wants to optimize site loading times for new European users. The site's backend must remain in the United States. The product is being launched in a few days, and an immediate solution is needed. What should the solutions architect recommend?",
    answers: [
      'Launch an Amazon EC2 instance in us-east-1 and migrate the site to it.',
      'Move the website to Amazon S3. Use Cross-Region Replication between Regions.',
      'Use Amazon CloudFront with a custom origin pointing to the on-premises servers.',
      'Use an Amazon Route 53 geoproximity routing policy pointing to on-premises servers.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      "A company wants to reduce the cost of its existing three-tier web architecture. The web, application, and database servers are running on Amazon EC2 instances for the development, test, and production environments. The EC2 instances average 30% CPU utilization during peak hours and 10% CPU utilization during non-peak hours. The production EC2 instances run 24 hours a day. The development and test EC2 instances run for at least 8 hours each day. The company plans to implement automation to stop the development and test EC2 instances when they are not in use. Which EC2 instance purchasing solution will meet the company's requirements MOST cost-effectively?",
    answers: [
      'Use Spot Instances for the production EC2 instances. Use Reserved Instances for the development and test EC2 instances.',
      'Use Reserved Instances for the production EC2 instances. Use On-Demand Instances for the development and test EC2 instances.',
      'Use Spot blocks for the production EC2 instances. Use Reserved Instances for the development and test EC2 instances.',
      'Use On-Demand Instances for the production EC2 instances. Use Spot blocks for the development and test EC2 instances.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'A company has a production web application in which users upload documents through a web interface or a mobile app. According to a new regulatory requirement, new documents cannot be modified or deleted after they are stored. What should a solutions architect do to meet this requirement?',
    answers: [
      'Store the uploaded documents in an Amazon S3 bucket with S3 Versioning and S3 Object Lock enabled.',
      'Store the uploaded documents in an Amazon S3 bucket. Configure an S3 Lifecycle policy to archive the documents periodically.',
      'Store the uploaded documents in an Amazon S3 bucket with S3 Versioning enabled. Configure an ACL to restrict all access to read-only.',
      'Store the uploaded documents on an Amazon Elastic File System (Amazon EFS) volume. Access the data by mounting the volume in read-only mode.'
    ],
    correctAnswer: [0]
  },
  {
    question:
      'A company has several web servers that need to frequently access a common Amazon RDS MySQL Multi-AZ DB instance. The company wants a secure method for the web servers to connect to the database while meeting a security requirement to rotate user credentials frequently. Which solution meets these requirements?',
    answers: [
      'Store the database user credentials in AWS Secrets Manager. Grant the necessary IAM permissions to allow the web servers to access AWS Secrets Manager.',
      'Store the database user credentials in AWS Systems Manager OpsCenter. Grant the necessary IAM permissions to allow the web servers to access OpsCenter.',
      'Store the database user credentials in a secure Amazon S3 bucket. Grant the necessary IAM permissions to allow the web servers to retrieve credentials and access the database.',
      'Store the database user credentials in files encrypted with AWS Key Management Service (AWS KMS) on the web server file system. The web server should be able to decrypt the files and access the database.'
    ],
    correctAnswer: [0]
  },
  {
    question:
      'A company hosts an application on AWS Lambda functions that are invoked by an Amazon API Gateway API. The Lambda functions save customer data to an Amazon Aurora MySQL database. Whenever the company upgrades the database, the Lambda functions fail to establish database connections until the upgrade is complete. The result is that customer data is not recorded for some of the events. A solutions architect needs to design a solution that stores customer data that is created during database upgrades. Which solution will meet these requirements?',
    answers: [
      'Provision an Amazon RDS proxy to sit between the Lambda functions and the database. Configure the Lambda functions to connect to the RDS proxy.',
      'Increase the run time of the Lambda functions to the maximum. Create a retry mechanism in the code that stores the customer data in the database.',
      'Persist the customer data to Lambda local storage. Configure new Lambda functions to scan the local storage to save the customer data to the database.',
      'Store the customer data in an Amazon Simple Queue Service (Amazon SQS) FIFO queue. Create a new Lambda function that polls the queue and stores the customer data in the database.'
    ],
    correctAnswer: [0]
  },
  {
    question:
      'A survey company has gathered data for several years from areas in the United States. The company hosts the data in an Amazon S3 bucket that is 3 TB in size and growing. The company has started to share the data with a European marketing firm that has S3 buckets. The company wants to ensure that its data transfer costs remain as low as possible. Which solution will meet these requirements?',
    answers: [
      "Configure the Requester Pays feature on the company's S3 bucket.",
      "Configure S3 Cross-Region Replication from the company's S3 bucket to one of the marketing firm's S3 buckets.",
      "Configure cross-account access for the marketing firm so that the marketing firm has access to the company's S3 bucket.",
      "Configure the company's S3 bucket to use S3 Intelligent-Tiering. Sync the S3 bucket to one of the marketing firm's S3 buckets."
    ],
    correctAnswer: [1]
  },
  {
    question:
      'A company uses Amazon S3 to store its confidential audit documents. The S3 bucket uses bucket policies to restrict access to audit team IAM user credentials according to the principle of least privilege. Company managers are worried about accidental deletion of documents in the S3 bucket and want a more secure solution. What should a solutions architect do to secure the audit documents?',
    answers: [
      'Enable the versioning and MFA Delete features on the S3 bucket.',
      'Enable multi-factor authentication (MFA) on the IAM user credentials for each audit team IAM user account.',
      "Add an S3 Lifecycle policy to the audit team's IAM user accounts to deny the s3:DeleteObject action during audit dates.",
      'Use AWS Key Management Service (AWS KMS) to encrypt the S3 bucket and restrict audit team IAM user accounts from accessing the KMS key.'
    ],
    correctAnswer: [0]
  },
  {
    question:
      "A company is using a SQL database to store movie data that is publicly accessible. The database runs on an Amazon RDS Single-AZ DB instance. A script runs queries at random intervals each day to record the number of new movies that have been added to the database. The script must report a final total during business hours. The company's development team notices that the database performance is inadequate for development tasks when the script is running. A solutions architect must recommend a solution to resolve this issue. Which solution will meet this requirement with the LEAST operational overhead?",
    answers: [
      'Modify the DB instance to be a Multi-AZ deployment.',
      'Create a read replica of the database. Configure the script to query only the read replica.',
      'Instruct the development team to manually export the entries in the database at the end of each day.',
      'Use Amazon ElastiCache to cache the common queries that the script runs against the database.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      "A company has applications that run on Amazon EC2 instances in a VPC. One of the applications needs to call the Amazon S3 API to store and read objects. According to the company's security regulations, no traffic from the applications is allowed to travel across the internet. Which solution will meet these requirements?",
    answers: [
      'Configure an S3 gateway endpoint.',
      'Create an S3 bucket in a private subnet.',
      'Create an S3 bucket in the same AWS Region as the EC2 instances.',
      'Configure a NAT gateway in the same subnet as the EC2 instances.'
    ],
    correctAnswer: [0]
  },
  {
    question:
      'A company is storing sensitive user information in an Amazon S3 bucket. The company wants to provide secure access to this bucket from the application tier running on Amazon EC2 instances inside a VPC. Which combination of steps should a solutions architect take to accomplish this? (Choose two.)',
    answers: [
      'Configure a VPC gateway endpoint for Amazon S3 within the VPC.',
      'Create a bucket policy to make the objects in the S3 bucket public.',
      'Create a bucket policy that limits access to only the application tier running in the VPC.',
      'Create an IAM user with an S3 access policy and copy the IAM credentials to the EC2 instance.',
      'Create a NAT instance and have the EC2 instances use the NAT instance to access the S3 bucket.'
    ],
    correctAnswer: [0, 2]
  },
  {
    question:
      "A company runs an on-premises application that is powered by a MySQL database. The company is migrating the application to AWS to increase the application's elasticity and availability. The current architecture shows heavy read activity on the database during times of normal operation. Every 4 hours, the company's development team pulls a full export of the production database to populate a database in the staging environment. During this period, users experience unacceptable application latency. The development team is unable to use the staging environment until the procedure completes. A solutions architect must recommend replacement architecture that alleviates the application latency issue. The replacement architecture also must give the development team the ability to continue using the staging environment without delay. Which solution meets these requirements?",
    answers: [
      'Use Amazon Aurora MySQL with Multi-AZ Aurora Replicas for production. Populate the staging database by implementing a backup and restore process that uses the mysqldump utility.',
      'Use Amazon Aurora MySQL with Multi-AZ Aurora Replicas for production. Use database cloning to create the staging database on-demand.',
      'Use Amazon RDS for MySQL with a Multi-AZ deployment and read replicas for production. Use the standby instance for the staging database.',
      'Use Amazon RDS for MySQL with a Multi-AZ deployment and read replicas for production. Populate the staging database by implementing a backup and restore process that uses the mysqldump utility.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'A company is designing an application where users upload small files into Amazon S3. After a user uploads a file, the file requires one-time simple processing to transform the data and save the data in JSON format for later analysis. Each file must be processed as quickly as possible after it is uploaded. Demand will vary. On some days, users will upload a high number of files. On other days, users will upload a few files or no files. Which solution meets these requirements with the LEAST operational overhead?',
    answers: [
      'Configure Amazon EMR to read text files from Amazon S3. Run processing scripts to transform the data. Store the resulting JSON file in an Amazon Aurora DB cluster.',
      'Configure Amazon S3 to send an event notification to an Amazon Simple Queue Service (Amazon SQS) queue. Use Amazon EC2 instances to read from the queue and process the data. Store the resulting JSON file in Amazon DynamoDB.',
      'Configure Amazon S3 to send an event notification to an Amazon Simple Queue Service (Amazon SQS) queue. Use an AWS Lambda function to read from the queue and process the data. Store the resulting JSON file in Amazon DynamoDB.',
      'Configure Amazon EventBridge (Amazon CloudWatch Events) to send an event to Amazon Kinesis Data Streams when a new file is uploaded. Use an AWS Lambda function to consume the event from the stream and process the data. Store the resulting JSON file in an Amazon Aurora DB cluster.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      "An application allows users at a company's headquarters to access product data. The product data is stored in an Amazon RDS MySQL DB instance. The operations team has isolated an application performance slowdown and wants to separate read traffic from write traffic. A solutions architect needs to optimize the application's performance quickly. What should the solutions architect recommend?",
    answers: [
      'Change the existing database to a Multi-AZ deployment. Serve the read requests from the primary Availability Zone.',
      'Change the existing database to a Multi-AZ deployment. Serve the read requests from the secondary Availability Zone.',
      'Create read replicas for the database. Configure the read replicas with half of the compute and storage resources as the source database.',
      'Create read replicas for the database. Configure the read replicas with the same compute and storage resources as the source database.'
    ],
    correctAnswer: [3]
  },
  {
    question: `An Amazon EC2 administrator created the following policy associated with an IAM group containing several users:
      {
        "Version": "2012-10-17",
        "Statement": [
          "Effect": "Allow",
          "Action": "ec2: TerminateInstances",
          "Resource": "*",
          "Condition": {
            "IpAddress": {
              "aws: SourceIp": "10.100.100.0/24"
            }
          },
          "Effect": "Deny",
          "Action": "ec2:*",
          "Resource": "*",
          "Condition": {
            "StringNotEquals": {
              "ec2:Region": "us-east-1"
            }
          }
        ]
      }

      What is the effect of this policy?`,
    answers: [
      'Users can terminate an EC2 instance in any AWS Region except us-east-1.',
      'Users can terminate an EC2 instance with the IP address 10.100.100.1 in the us-east-1 Region.',
      "Users can terminate an EC2 instance in the us-east-1 Region when the user's source IP is 10.100.100.254.",
      "Users cannot terminate an EC2 instance in the us-east-1 Region when the user's source IP is 10.100.100.254."
    ],
    correctAnswer: [2]
  },
  {
    question:
      'A company has a large Microsoft SharePoint deployment running on-premises that requires Microsoft Windows shared file storage. The company wants to migrate this workload to the AWS Cloud and is considering various storage options. The storage solution must be highly available and integrated with Active Directory for access control. Which solution will satisfy these requirements?',
    answers: [
      'Configure Amazon EFS storage and set the Active Directory domain for authentication.',
      'Create an SMB file share on an AWS Storage Gateway file gateway in two Availability Zones.',
      'Create an Amazon S3 bucket and configure Microsoft Windows Server to mount it as a volume.',
      'Create an Amazon FSx for Windows File Server file system on AWS and set the Active Directory domain for authentication.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'An image-processing company has a web application that users use to upload images. The application uploads the images into an Amazon S3 bucket. The company has set up S3 event notifications to publish the object creation events to an Amazon Simple Queue Service (Amazon SQS) standard queue. The SQS queue serves as the event source for an AWS Lambda function that processes the images and sends the results to users through email. Users report that they are receiving multiple email messages for every uploaded image. A solutions architect determines that SQS messages are invoking the Lambda function more than once, resulting in multiple email messages. What should the solutions architect do to resolve this issue with the LEAST operational overhead?',
    answers: [
      'Set up long polling in the SQS queue by increasing the ReceiveMessage wait time to 30 seconds.',
      'Change the SQS standard queue to an SQS FIFO queue. Use the message deduplication ID to discard duplicate messages.',
      'Increase the visibility timeout in the SQS queue to a value that is greater than the total of the function timeout and the batch window timeout.',
      'Modify the Lambda function to delete each message from the SQS queue immediately after the message is read before processing.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'A company is implementing a shared storage solution for a gaming application that is hosted in an on-premises data center. The company needs the ability to use Lustre clients to access data. The solution must be fully managed. Which solution meets these requirements?',
    answers: [
      'Create an AWS Storage Gateway file gateway. Create a file share that uses the required client protocol. Connect the application server to the file share.',
      'Create an Amazon EC2 Windows instance. Install and configure a Windows file share role on the instance. Connect the application server to the file share.',
      'Create an Amazon Elastic File System (Amazon EFS) file system, and configure it to support Lustre. Attach the file system to the origin server. Connect the application server to the file system.',
      'Create an Amazon FSx for Lustre file system. Attach the file system to the origin server. Connect the application server to the file system.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      "A company's containerized application runs on an Amazon EC2 instance. The application needs to download security certificates before it can communicate with other business applications. The company wants a highly secure solution to encrypt and decrypt the certificates in near real time. The solution also needs to store data in highly available storage after the data is encrypted. Which solution will meet these requirements with the LEAST operational overhead?",
    answers: [
      'Create AWS Secrets Manager secrets for encrypted certificates. Manually update the certificates as needed. Control access to the data by using fine-grained IAM access.',
      'Create an AWS Lambda function that uses the Python cryptography library to receive and perform encryption operations. Store the function in an Amazon S3 bucket.',
      'Create an AWS Key Management Service (AWS KMS) customer managed key. Allow the EC2 role to use the KMS key for encryption operations. Store the encrypted data on Amazon S3.',
      'Create an AWS Key Management Service (AWS KMS) customer managed key. Allow the EC2 role to use the KMS key for encryption operations. Store the encrypted data on Amazon Elastic Block Store (Amazon EBS) volumes.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'A solutions architect is designing a VPC with public and private subnets. The VPC and subnets use IPv4 CIDR blocks. There is one public subnet and one private subnet in each of three Availability Zones (AZs) for high availability. An internet gateway is used to provide internet access for the public subnets. The private subnets require access to the internet to allow Amazon EC2 instances to download software updates. What should the solutions architect do to enable Internet access for the private subnets?',
    answers: [
      'Create three NAT gateways, one for each public subnet in each AZ. Create a private route table for each AZ that forwards non-VPC traffic to the NAT gateway in its AZ.',
      'Create three NAT instances, one for each private subnet in each AZ. Create a private route table for each AZ that forwards non-VPC traffic to the NAT instance in its AZ.',
      'Create a second internet gateway on one of the private subnets. Update the route table for the private subnets that forward non-VPC traffic to the private internet gateway.',
      'Create an egress-only internet gateway on one of the public subnets. Update the route table for the private subnets that forward non-VPC traffic to the egress-only Internet gateway.'
    ],
    correctAnswer: [0]
  },
  {
    question:
      'A company wants to migrate an on-premises data center to AWS. The data center hosts an SFTP server that stores its data on an NFS-based file system. The server holds 200 GB of data that needs to be transferred. The server must be hosted on an Amazon EC2 instance that uses an Amazon Elastic File System (Amazon EFS) file system. Which combination of steps should a solutions architect take to automate this task? (Choose two.)',
    answers: [
      'Launch the EC2 instance into the same Availability Zone as the EFS file system.',
      'Install an AWS DataSync agent in the on-premises data center.',
      'Create a secondary Amazon Elastic Block Store (Amazon EBS) volume on the EC2 instance for the data.',
      'Manually use an operating system copy command to push the data to the EC2 instance.',
      'Use AWS DataSync to create a suitable location configuration for the on-premises SFTP server.'
    ],
    correctAnswer: [1, 4]
  },
  {
    question:
      'A company has an AWS Glue extract, transform, and load (ETL) job that runs every day at the same time. The job processes XML data that is in an Amazon S3 bucket. New data is added to the S3 bucket every day. A solutions architect notices that AWS Glue is processing all the data during each run. What should the solutions architect do to prevent AWS Glue from reprocessing old data?',
    answers: [
      'Edit the job to use job bookmarks.',
      'Edit the job to delete data after the data is processed.',
      'Edit the job by setting the NumberOfWorkers field to 1.',
      'Use a FindMatches machine learning (ML) transform.'
    ],
    correctAnswer: [0]
  },
  {
    question:
      'A solutions architect must design a highly available infrastructure for a website. The website is powered by Windows web servers that run on Amazon EC2 instances. The solutions architect must implement a solution that can mitigate a large-scale DDoS attack that originates from thousands of IP addresses. Downtime is not acceptable for the website. Which actions should the solutions architect take to protect the website from such an attack? (Choose two.)',
    answers: [
      'Use AWS Shield Advanced to stop the DDoS attack.',
      'Configure Amazon GuardDuty to automatically block the attackers.',
      'Configure the website to use Amazon CloudFront for both static and dynamic content.',
      'Use an AWS Lambda function to automatically add attacker IP addresses to VPC network ACLs.',
      'Use EC2 Spot Instances in an Auto Scaling group with a target tracking scaling policy that is set to 80% CPU utilization.'
    ],
    correctAnswer: [0, 2]
  },
  {
    question:
      'A company is preparing to deploy a new serverless workload. A solutions architect must use the principle of least privilege to configure permissions that will be used to run an AWS Lambda function. An Amazon EventBridge (Amazon CloudWatch Events) rule will invoke the function. Which solution meets these requirements?',
    answers: [
      'Add an execution role to the function with lambda:InvokeFunction as the action and * as the principal.',
      'Add an execution role to the function with lambda:InvokeFunction as the action and Service: lambda.amazonaws.com as the principal.',
      'Add a resource-based policy to the function with lambda:* as the action and Service: events.amazonaws.com as the principal.',
      'Add a resource-based policy to the function with lambda:InvokeFunction as the action and Service: events.amazonaws.com as the principal.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'A company is preparing to store confidential data in Amazon S3. For compliance reasons, the data must be encrypted at rest. Encryption key usage must be logged for auditing purposes. Keys must be rotated every year. Which solution meets these requirements and is the MOST operationally efficient?',
    answers: [
      'Server-side encryption with customer-provided keys (SSE-C)',
      'Server-side encryption with Amazon S3 managed keys (SSE-S3)',
      'Server-side encryption with AWS KMS keys (SSE-KMS) with manual rotation',
      'Server-side encryption with AWS KMS keys (SSE-KMS) with automatic rotation'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'A bicycle sharing company is developing a multi-tier architecture to track the location of its bicycles during peak operating hours. The company wants to use these data points in its existing analytics platform. A solutions architect must determine the most viable multi-tier option to support this architecture. The data points must be accessible from the REST API. Which action meets these requirements for storing and retrieving location data?',
    answers: [
      'Use Amazon Athena with Amazon S3.',
      'Use Amazon API Gateway with AWS Lambda.',
      'Use Amazon QuickSight with Amazon Redshift.',
      'Use Amazon API Gateway with Amazon Kinesis Data Analytics.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'A company has an automobile sales website that stores its listings in a database on Amazon RDS. When an automobile is sold, the listing needs to be removed from the website and the data must be sent to multiple target systems. Which design should a solutions architect recommend?',
    answers: [
      'Create an AWS Lambda function triggered when the database on Amazon RDS is updated to send the information to an Amazon Simple Queue Service (Amazon SQS) queue for the targets to consume.',
      'Create an AWS Lambda function triggered when the database on Amazon RDS is updated to send the information to an Amazon Simple Queue Service (Amazon SQS) FIFO queue for the targets to consume.',
      'Subscribe to an RDS event notification and send an Amazon Simple Queue Service (Amazon SQS) queue fanned out to multiple Amazon Simple Notification Service (Amazon SNS) topics. Use AWS Lambda functions to update the targets.',
      'Subscribe to an RDS event notification and send an Amazon Simple Notification Service (Amazon SNS) topic fanned out to multiple Amazon Simple Queue Service (Amazon SQS) queues. Use AWS Lambda functions to update the targets.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      "A company needs to store data in Amazon S3 and must prevent the data from being changed. The company wants new objects that are uploaded to Amazon S3 to remain unchangeable for a nonspecific amount of time until the company decides to modify the objects. Only specific users in the company's AWS account can have the ability 10 delete the objects. What should a solutions architect do to meet these requirements?",
    answers: [
      'Create an S3 Glacier vault. Apply a write-once, read-many (WORM) vault lock policy to the objects.',
      'Create an S3 bucket with S3 Object Lock enabled. Enable versioning. Set a retention period of 100 years. Use governance mode as the S3 bucket’s default retention mode for new objects.',
      'Create an S3 bucket. Use AWS CloudTrail to track any S3 API events that modify the objects. Upon notification, restore the modified objects from any backup versions that the company has.',
      'Create an S3 bucket with S3 Object Lock enabled. Enable versioning. Add a legal hold to the objects. Add the s3:PutObjectLegalHold permission to the IAM policies of users who need to delete the objects.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'A social media company allows users to upload images to its website. The website runs on Amazon EC2 instances. During upload requests, the website resizes the images to a standard size and stores the resized images in Amazon S3. Users are experiencing slow upload requests to the website. The company needs to reduce coupling within the application and improve website performance. A solutions architect must design the most operationally efficient process for image uploads. Which combination of actions should the solutions architect take to meet these requirements? (Choose two.)',
    answers: [
      'Configure the application to upload images to S3 Glacier.',
      'Configure the web server to upload the original images to Amazon S3.',
      "Configure the application to upload images directly from each user's browser to Amazon S3 through the use of a presigned URL",
      'Configure S3 Event Notifications to invoke an AWS Lambda function when an image is uploaded. Use the function to resize the image.',
      'Create an Amazon EventBridge (Amazon CloudWatch Events) rule that invokes an AWS Lambda function on a schedule to resize uploaded images.'
    ],
    correctAnswer: [2, 3]
  },
  {
    question:
      'A company recently migrated a message processing system to AWS. The system receives messages into an ActiveMQ queue running on an Amazon EC2 instance. Messages are processed by a consumer application running on Amazon EC2. The consumer application processes the messages and writes results to a MySQL database running on Amazon EC2. The company wants this application to be highly available with low operational complexity. Which architecture offers the HIGHEST availability?',
    answers: [
      'Add a second ActiveMQ server to another Availability Zone. Add an additional consumer EC2 instance in another Availability Zone. Replicate the MySQL database to another Availability Zone.',
      'Use Amazon MQ with active/standby brokers configured across two Availability Zones. Add an additional consumer EC2 instance in another Availability Zone. Replicate the MySQL database to another Availability Zone.',
      'Use Amazon MQ with active/standby brokers configured across two Availability Zones. Add an additional consumer EC2 instance in another Availability Zone. Use Amazon RDS for MySQL with Multi-AZ enabled.',
      'Use Amazon MQ with active/standby brokers configured across two Availability Zones. Add an Auto Scaling group for the consumer EC2 instances across two Availability Zones. Use Amazon RDS for MySQL with Multi-AZ enabled.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'A company hosts a containerized web application on a fleet of on-premises servers that process incoming requests. The number of requests is growing quickly. The on-premises servers cannot handle the increased number of requests. The company wants to move the application to AWS with minimum code changes and minimum development effort. Which solution will meet these requirements with the LEAST operational overhead?',
    answers: [
      'Use AWS Fargate on Amazon Elastic Container Service (Amazon ECS) to run the containerized web application with Service Auto Scaling. Use an Application Load Balancer to distribute the incoming requests.',
      'Use two Amazon EC2 instances to host the containerized web application. Use an Application Load Balancer to distribute the incoming requests.',
      'Use AWS Lambda with a new code that uses one of the supported languages. Create multiple Lambda functions to support the load. Use Amazon API Gateway as an entry point to the Lambda functions.',
      'Use a high performance computing (HPC) solution such as AWS ParallelCluster to establish an HPC cluster that can process the incoming requests at the appropriate scale.'
    ],
    correctAnswer: [0]
  },
  {
    question:
      'A company uses 50 TB of data for reporting. The company wants to move this data from on premises to AWS. A custom application in the company’s data center runs a weekly data transformation job. The company plans to pause the application until the data transfer is complete and needs to begin the transfer process as soon as possible. The data center does not have any available network bandwidth for additional workloads. A solutions architect must transfer the data and must configure the transformation job to continue to run in the AWS Cloud. Which solution will meet these requirements with the LEAST operational overhead?',
    answers: [
      'Use AWS DataSync to move the data. Create a custom transformation job by using AWS Glue.',
      'Order an AWS Snowcone device to move the data. Deploy the transformation application to the device.',
      'Order an AWS Snowball Edge Storage Optimized device. Copy the data to the device. Create a custom transformation job by using AWS Glue.',
      'Order an AWS Snowball Edge Storage Optimized device that includes Amazon EC2 compute. Copy the data to the device. Create a new EC2 instance on AWS to run the transformation application.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'A company has created an image analysis application in which users can upload photos and add photo frames to their images. The users upload images and metadata to indicate which photo frames they want to add to their images. The application uses a single Amazon EC2 instance and Amazon DynamoDB to store the metadata. The application is becoming more popular, and the number of users is increasing. The company expects the number of concurrent users to vary significantly depending on the time of day and day of week. The company must ensure that the application can scale to meet the needs of the growing user base. Which solution meets these requirements?',
    answers: [
      'Use AWS Lambda to process the photos. Store the photos and metadata in DynamoDB.',
      'Use Amazon Kinesis Data Firehose to process the photos and to store the photos and metadata.',
      'Use AWS Lambda to process the photos. Store the photos in Amazon S3. Retain DynamoDB to store the metadata.',
      'Increase the number of EC2 instances to three. Use Provisioned IOPS SSD (io2) Amazon Elastic Block Store (Amazon EBS) volumes to store the photos and metadata.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'A medical records company is hosting an application on Amazon EC2 instances. The application processes customer data files that are stored on Amazon S3. The EC2 instances are hosted in public subnets. The EC2 instances access Amazon S3 over the internet, but they do not require any other network access. A new requirement mandates that the network traffic for file transfers take a private route and not be sent over the internet. Which change to the network architecture should a solutions architect recommend to meet this requirement?',
    answers: [
      'Create a NAT gateway. Configure the route table for the public subnets to send traffic to Amazon S3 through the NAT gateway.',
      'Configure the security group for the EC2 instances to restrict outbound traffic so that only traffic to the S3 prefix list is permitted.',
      'Move the EC2 instances to private subnets. Create a VPC endpoint for Amazon S3, and link the endpoint to the route table for the private subnets.',
      'Remove the internet gateway from the VPC. Set up an AWS Direct Connect connection, and route traffic to Amazon S3 over the Direct Connect connection.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'A company uses a popular content management system (CMS) for its corporate website. However, the required patching and maintenance are burdensome. The company is redesigning its website and wants new solution. The website will be updated four times a year and does not need to have any dynamic content available. The solution must provide high scalability and enhanced security. Which combination of changes will meet these requirements with the LEAST operational overhead? (Choose two.)',
    answers: [
      'Configure Amazon CloudFront in front of the website to use HTTPS functionality.',
      'Deploy an AWS WAF web ACL in front of the website to provide HTTPS functionality.',
      'Create and deploy an AWS Lambda function to manage and serve the website content.',
      'Create the new website and an Amazon S3 bucket. Deploy the website on the S3 bucket with static website hosting enabled.',
      'Create the new website. Deploy the website by using an Auto Scaling group of Amazon EC2 instances behind an Application Load Balancer.'
    ],
    correctAnswer: [0, 3]
  },
  {
    question:
      'A company stores its application logs in an Amazon CloudWatch Logs log group. A new policy requires the company to store all application logs in Amazon OpenSearch Service (Amazon Elasticsearch Service) in near-real time. Which solution will meet this requirement with the LEAST operational overhead?',
    answers: [
      'Configure a CloudWatch Logs subscription to stream the logs to Amazon OpenSearch Service (Amazon Elasticsearch Service).',
      'Create an AWS Lambda function. Use the log group to invoke the function to write the logs to Amazon OpenSearch Service (Amazon Elasticsearch Service).',
      "Create an Amazon Kinesis Data Firehose delivery stream. Configure the log group as the delivery stream's source. Configure Amazon OpenSearch Service (Amazon Elasticsearch Service) as the delivery stream's destination.",
      'Install and configure Amazon Kinesis Agent on each application server to deliver the logs to Amazon Kinesis Data Streams. Configure Kinesis Data Streams to deliver the logs to Amazon OpenSearch Service (Amazon Elasticsearch Service).'
    ],
    correctAnswer: [0]
  },
  {
    question:
      'A company is building a web-based application running on Amazon EC2 instances in multiple Availability Zones. The web application will provide access to a repository of text documents totaling about 900 TB in size. The company anticipates that the web application will experience periods of high demand. A solutions architect must ensure that the storage component for the text documents can scale to meet the demand of the application at all times. The company is concerned about the overall cost of the solution. Which storage solution meets these requirements MOST cost-effectively?',
    answers: [
      'Amazon Elastic Block Store (Amazon EBS)',
      'Amazon Elastic File System (Amazon EFS)',
      'Amazon OpenSearch Service (Amazon Elasticsearch Service)',
      'Amazon S3'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'A global company is using Amazon API Gateway to design REST APIs for its loyalty club users in the us-east-1 Region and the ap-southeast-2 Region. A solutions architect must design a solution to protect these API Gateway managed REST APIs across multiple accounts from SQL injection and cross-site scripting attacks. Which solution will meet these requirements with the LEAST amount of administrative effort?',
    answers: [
      'Set up AWS WAF in both Regions. Associate Regional web ACLs with an API stage.',
      'Set up AWS Firewall Manager in both Regions. Centrally configure AWS WAF rules.',
      'Set up AWS Shield in both Regions. Associate Regional web ACLs with an API stage.',
      'Set up AWS Shield in one of the Regions. Associate Regional web ACLs with an API stage.'
    ],
    correctAnswer: [0]
  },
  {
    question:
      "A company has implemented a self-managed DNS solution on three Amazon EC2 instances behind a Network Load Balancer (NLB) in the us-west-2 Region. Most of the company's users are located in the United States and Europe. The company wants to improve the performance and availability of the solution. The company launches and configures three EC2 instances in the eu-west-1 Region and adds the EC2 instances as targets for a new NLB. Which solution can the company use to route traffic to all the EC2 instances?",
    answers: [
      'Create an Amazon Route 53 geolocation routing policy to route requests to one of the two NLBs. Create an Amazon CloudFront distribution. Use the Route 53 record as the distribution’s origin.',
      'Create a standard accelerator in AWS Global Accelerator. Create endpoint groups in us-west-2 and eu-west-1. Add the two NLBs as endpoints for the endpoint groups.',
      "Attach Elastic IP addresses to the six EC2 instances. Create an Amazon Route 53 geolocation routing policy to route requests to one of the six EC2 instances. Create an Amazon CloudFront distribution. Use the Route 53 record as the distribution's origin.",
      'Replace the two NLBs with two Application Load Balancers (ALBs). Create an Amazon Route 53 latency routing policy to route requests to one of the two ALBs. Create an Amazon CloudFront distribution. Use the Route 53 record as the distribution’s origin.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'A company is running an online transaction processing (OLTP) workload on AWS. This workload uses an unencrypted Amazon RDS DB instance in a Multi-AZ deployment. Daily database snapshots are taken from this instance. What should a solutions architect do to ensure the database and snapshots are always encrypted moving forward?',
    answers: [
      'Encrypt a copy of the latest DB snapshot. Replace existing DB instance by restoring the encrypted snapshot.',
      'Create a new encrypted Amazon Elastic Block Store (Amazon EBS) volume and copy the snapshots to it. Enable encryption on the DB instance.',
      'Copy the snapshots and enable encryption using AWS Key Management Service (AWS KMS). Restore encrypted snapshot to an existing DB instance.',
      'Copy the snapshots to an Amazon S3 bucket that is encrypted using server-side encryption with AWS Key Management Service (AWS KMS) managed keys (SSE-KMS).'
    ],
    correctAnswer: [0]
  },
  {
    question:
      'A company wants to build a scalable key management infrastructure to support developers who need to encrypt data in their applications. What should a solutions architect do to reduce the operational burden?',
    answers: [
      'Use multi-factor authentication (MFA) to protect the encryption keys.',
      'Use AWS Key Management Service (AWS KMS) to protect the encryption keys.',
      'Use AWS Certificate Manager (ACM) to create, store, and assign the encryption keys.',
      'Use an IAM policy to limit the scope of users who have access permissions to protect the encryption keys.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      "A company has a dynamic web application hosted on two Amazon EC2 instances. The company has its own SSL certificate, which is on each instance to perform SSL termination. There has been an increase in traffic recently, and the operations team determined that SSL encryption and decryption is causing the compute capacity of the web servers to reach their maximum limit. What should a solutions architect do to increase the application's performance?",
    answers: [
      'Create a new SSL certificate using AWS Certificate Manager (ACM). Install the ACM certificate on each instance.',
      'Create an Amazon S3 bucket. Migrate the SSL certificate to the S3 bucket. Configure the EC2 instances to reference the bucket for SSL termination.',
      'Create another EC2 instance as a proxy server. Migrate the SSL certificate to the new instance and configure it to direct connections to the existing EC2 instances.',
      'Import the SSL certificate into AWS Certificate Manager (ACM). Create an Application Load Balancer with an HTTPS listener that uses the SSL certificate from ACM.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'A company has a highly dynamic batch processing job that uses many Amazon EC2 instances to complete it. The job is stateless in nature, can be started and stopped at any given time with no negative impact, and typically takes upwards of 60 minutes total to complete. The company has asked a solutions architect to design a scalable and cost-effective solution that meets the requirements of the job. What should the solutions architect recommend?',
    answers: [
      'Implement EC2 Spot Instances.',
      'Purchase EC2 Reserved Instances.',
      'Implement EC2 On-Demand Instances.',
      'Implement the processing on AWS Lambda.'
    ],
    correctAnswer: [0]
  },
  {
    question:
      'A company runs its two-tier ecommerce website on AWS. The web tier consists of a load balancer that sends traffic to Amazon EC2 instances. The database tier uses an Amazon RDS DB instance. The EC2 instances and the RDS DB instance should not be exposed to the public internet. The EC2 instances require internet access to complete payment processing of orders through a third-party web service. The application must be highly available. Which combination of configuration options will meet these requirements? (Choose two.)',
    answers: [
      'Use an Auto Scaling group to launch the EC2 instances in private subnets. Deploy an RDS Multi-AZ DB instance in private subnets.',
      'Configure a VPC with two private subnets and two NAT gateways across two Availability Zones. Deploy an Application Load Balancer in the private subnets.',
      'Use an Auto Scaling group to launch the EC2 instances in public subnets across two Availability Zones. Deploy an RDS Multi-AZ DB instance in private subnets.',
      'Configure a VPC with one public subnet, one private subnet, and two NAT gateways across two Availability Zones. Deploy an Application Load Balancer in the public subnet.',
      'Configure a VPC with two public subnets, two private subnets, and two NAT gateways across two Availability Zones. Deploy an Application Load Balancer in the public subnets.'
    ],
    correctAnswer: [0, 4]
  },
  {
    question:
      "A solutions architect needs to implement a solution to reduce a company's storage costs. All the company's data is in the Amazon S3 Standard storage class. The company must keep all data for at least 25 years. Data from the most recent 2 years must be highly available and immediately retrievable. Which solution will meet these requirements?",
    answers: [
      'Set up an S3 Lifecycle policy to transition objects to S3 Glacier Deep Archive immediately.',
      'Set up an S3 Lifecycle policy to transition objects to S3 Glacier Deep Archive after 2 years.',
      'Use S3 Intelligent-Tiering. Activate the archiving option to ensure that data is archived in S3 Glacier Deep Archive.',
      'Set up an S3 Lifecycle policy to transition objects to S3 One Zone-Infrequent Access (S3 One Zone-IA) immediately and to S3 Glacier Deep Archive after 2 years.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'A media company is evaluating the possibility of moving its systems to the AWS Cloud. The company needs at least 10 TB of storage with the maximum possible I/O performance for video processing, 300 TB of very durable storage for storing media content, and 900 TB of storage to meet requirements for archival media that is not in use anymore. Which set of services should a solutions architect recommend to meet these requirements?',
    answers: [
      'Amazon EBS for maximum performance, Amazon S3 for durable data storage, and Amazon S3 Glacier for archival storage',
      'Amazon EBS for maximum performance, Amazon EFS for durable data storage, and Amazon S3 Glacier for archival storage',
      'Amazon EC2 instance store for maximum performance, Amazon EFS for durable data storage, and Amazon S3 for archival storage',
      'Amazon EC2 instance store for maximum performance, Amazon S3 for durable data storage, and Amazon S3 Glacier for archival storage'
    ],
    correctAnswer: [0]
  },
  {
    question:
      'A company wants to run applications in containers in the AWS Cloud. These applications are stateless and can tolerate disruptions within the underlying infrastructure. The company needs a solution that minimizes cost and operational overhead. What should a solutions architect do to meet these requirements?',
    answers: [
      'Use Spot Instances in an Amazon EC2 Auto Scaling group to run the application containers.',
      'Use Spot Instances in an Amazon Elastic Kubernetes Service (Amazon EKS) managed node group.',
      'Use On-Demand Instances in an Amazon EC2 Auto Scaling group to run the application containers.',
      'Use On-Demand Instances in an Amazon Elastic Kubernetes Service (Amazon EKS) managed node group.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      "A company is running a multi-tier web application on premises. The web application is containerized and runs on a number of Linux hosts connected to a PostgreSQL database that contains user records. The operational overhead of maintaining the infrastructure and capacity planning is limiting the company's growth. A solutions architect must improve the application's infrastructure. Which combination of actions should the solutions architect take to accomplish this? (Choose two.)",
    answers: [
      'Migrate the PostgreSQL database to Amazon Aurora.',
      'Migrate the web application to be hosted on Amazon EC2 instances.',
      'Set up an Amazon CloudFront distribution for the web application content.',
      'Set up Amazon ElastiCache between the web application and the PostgreSQL database.',
      'Migrate the web application to be hosted on AWS Fargate with Amazon Elastic Container Service (Amazon ECS).'
    ],
    correctAnswer: [0, 4]
  },
  {
    question:
      'An application runs on Amazon EC2 instances across multiple Availability Zones. The instances run in an Amazon EC2 Auto Scaling group behind an Application Load Balancer. The application performs best when the CPU utilization of the EC2 instances is at or near 40%. What should a solutions architect do to maintain the desired performance across all instances in the group?',
    answers: [
      'Use a simple scaling policy to dynamically scale the Auto Scaling group.',
      'Use a target tracking policy to dynamically scale the Auto Scaling group.',
      'Use an AWS Lambda function to update the desired Auto Scaling group capacity.',
      'Use scheduled scaling actions to scale up and scale down the Auto Scaling group.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'A company is developing a file-sharing application that will use an Amazon S3 bucket for storage. The company wants to serve all the files through an Amazon CloudFront distribution. The company does not want the files to be accessible through direct navigation to the S3 URL. What should a solutions architect do to meet these requirements?',
    answers: [
      'Write individual policies for each S3 bucket to grant read permission for only CloudFront access.',
      'Create an IAM user. Grant the user read permission to objects in the S3 bucket. Assign the user to CloudFront.',
      'Write an S3 bucket policy that assigns the CloudFront distribution ID as the Principal and assigns the target S3 bucket as the Amazon Resource Name (ARN).',
      'Create an origin access identity (OAI). Assign the OAI to the CloudFront distribution. Configure the S3 bucket permissions so that only the OAI has read permission.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'A company’s website provides users with downloadable historical performance reports. The website needs a solution that will scale to meet the company’s website demands globally. The solution should be cost-effective, limit the provisioning of infrastructure resources, and provide the fastest possible response time. Which combination should a solutions architect recommend to meet these requirements?',
    answers: [
      'Amazon CloudFront and Amazon S3',
      'AWS Lambda and Amazon DynamoDB',
      'Application Load Balancer with Amazon EC2 Auto Scaling',
      'Amazon Route 53 with internal Application Load Balancers'
    ],
    correctAnswer: [0]
  },
  {
    question:
      "A company runs an Oracle database on premises. As part of the company’s migration to AWS, the company wants to upgrade the database to the most recent available version. The company also wants to set up disaster recovery (DR) for the database. The company needs to minimize the operational overhead for normal operations and DR setup. The company also needs to maintain access to the database's underlying operating system. Which solution will meet these requirements?",
    answers: [
      'Migrate the Oracle database to an Amazon EC2 instance. Set up database replication to a different AWS Region.',
      'Migrate the Oracle database to Amazon RDS for Oracle. Activate Cross-Region automated backups to replicate the snapshots to another AWS Region.',
      'Migrate the Oracle database to Amazon RDS Custom for Oracle. Create a read replica for the database in another AWS Region.',
      'Migrate the Oracle database to Amazon RDS for Oracle. Create a standby database in another Availability Zone.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'A company wants to move its application to a serverless solution. The serverless solution needs to analyze existing and new data by using AI. The company stores the data in an Amazon S3 bucket. The data requires encryption and must be replicated to a different AWS Region. Which solution will meet these requirements with the LEAST operational overhead?',
    answers: [
      'Create a new S3 bucket. Load the data into the new S3 bucket. Use S3 Cross-Region Replication (CRR) to replicate encrypted objects to an S3 bucket in another Region. Use server-side encryption with AWS KMS multi-Region keys (SSE-KMS). Use Amazon Athena to query the data.',
      'Create a new S3 bucket. Load the data into the new S3 bucket. Use S3 Cross-Region Replication (CRR) to replicate encrypted objects to an S3 bucket in another Region. Use server-side encryption with AWS KMS multi-Region keys (SSE-KMS). Use Amazon RDS to query the data.',
      'Load the data into the existing S3 bucket. Use S3 Cross-Region Replication (CRR) to replicate encrypted objects to an S3 bucket in another Region. Use server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Use Amazon Athena to query the data.',
      'Load the data into the existing S3 bucket. Use S3 Cross-Region Replication (CRR) to replicate encrypted objects to an S3 bucket in another Region. Use server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Use Amazon RDS to query the data.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      "A company runs workloads on AWS. The company needs to connect to a service from an external provider. The service is hosted in the provider's VPC. According to the company’s security team, the connectivity must be private and must be restricted to the target service. The connection must be initiated only from the company’s VPC. Which solution will meet these requirements?",
    answers: [
      "Create a VPC peering connection between the company's VPC and the provider's VPC. Update the route table to connect to the target service.",
      'Ask the provider to create a virtual private gateway in its VPC. Use AWS PrivateLink to connect to the target service.',
      'Create a NAT gateway in a public subnet of the company’s VPC. Update the route table to connect to the target service.',
      'Ask the provider to create a VPC endpoint for the target service. Use AWS PrivateLink to connect to the target service.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'A company is migrating its on-premises PostgreSQL database to Amazon Aurora PostgreSQL. The on-premises database must remain online and accessible during the migration. The Aurora database must remain synchronized with the on-premises database. Which combination of actions must a solutions architect take to meet these requirements? (Choose two.)',
    answers: [
      'Create an ongoing replication task.',
      'Create a database backup of the on-premises database.',
      'Create an AWS Database Migration Service (AWS DMS) replication server.',
      'Convert the database schema by using the AWS Schema Conversion Tool (AWS SCT).',
      'Create an Amazon EventBridge (Amazon CloudWatch Events) rule to monitor the database synchronization.'
    ],
    correctAnswer: [0, 2]
  },
  {
    question:
      "A company uses AWS Organizations to create dedicated AWS accounts for each business unit to manage each business unit's account independently upon request. The root email recipient missed a notification that was sent to the root user email address of one account. The company wants to ensure that all future notifications are not missed. Future notifications must be limited to account administrators. Which solution will meet these requirements?",
    answers: [
      'Configure the company’s email server to forward notification email messages that are sent to the AWS account root user email address to all users in the organization.',
      'Configure all AWS account root user email addresses as distribution lists that go to a few administrators who can respond to alerts. Configure AWS account alternate contacts in the AWS Organizations console or programmatically.',
      'Configure all AWS account root user email messages to be sent to one administrator who is responsible for monitoring alerts and forwarding those alerts to the appropriate groups.',
      'Configure all existing AWS accounts and all newly created accounts to use the same root user email address. Configure AWS account alternate contacts in the AWS Organizations console or programmatically.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'A company runs its ecommerce application on AWS. Every new order is published as a message in a RabbitMQ queue that runs on an Amazon EC2 instance in a single Availability Zone. These messages are processed by a different application that runs on a separate EC2 instance. This application stores the details in a PostgreSQL database on another EC2 instance. All the EC2 instances are in the same Availability Zone. The company needs to redesign its architecture to provide the highest availability with the least operational overhead. What should a solutions architect do to meet these requirements?',
    answers: [
      'Migrate the queue to a redundant pair (active/standby) of RabbitMQ instances on Amazon MQ. Create a Multi-AZ Auto Scaling group for EC2 instances that host the application. Create another Multi-AZ Auto Scaling group for EC2 instances that host the PostgreSQL database.',
      'Migrate the queue to a redundant pair (active/standby) of RabbitMQ instances on Amazon MQ. Create a Multi-AZ Auto Scaling group for EC2 instances that host the application. Migrate the database to run on a Multi-AZ deployment of Amazon RDS for PostgreSQL.',
      'Create a Multi-AZ Auto Scaling group for EC2 instances that host the RabbitMQ queue. Create another Multi-AZ Auto Scaling group for EC2 instances that host the application. Migrate the database to run on a Multi-AZ deployment of Amazon RDS for PostgreSQL.',
      'Create a Multi-AZ Auto Scaling group for EC2 instances that host the RabbitMQ queue. Create another Multi-AZ Auto Scaling group for EC2 instances that host the application. Create a third Multi-AZ Auto Scaling group for EC2 instances that host the PostgreSQL database.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'A reporting team receives files each day in an Amazon S3 bucket. The reporting team manually reviews and copies the files from this initial S3 bucket to an analysis S3 bucket each day at the same time to use with Amazon QuickSight. Additional teams are starting to send more files in larger sizes to the initial S3 bucket. The reporting team wants to move the files automatically to the analysis S3 bucket as the files enter the initial S3 bucket. The reporting team also wants to use AWS Lambda functions to run pattern-matching code on the copied data. In addition, the reporting team wants to send the data files to a pipeline in Amazon SageMaker Pipelines. What should a solutions architect do to meet these requirements with the LEAST operational overhead?',
    answers: [
      'Create a Lambda function to copy the files to the analysis S3 bucket. Create an S3 event notification for the analysis S3 bucket. Configure Lambda and SageMaker Pipelines as destinations of the event notification. Configure s3:ObjectCreated:Put as the event type.',
      'Create a Lambda function to copy the files to the analysis S3 bucket. Configure the analysis S3 bucket to send event notifications to Amazon EventBridge (Amazon CloudWatch Events). Configure an ObjectCreated rule in EventBridge (CloudWatch Events). Configure Lambda and SageMaker Pipelines as targets for the rule.',
      'Configure S3 replication between the S3 buckets. Create an S3 event notification for the analysis S3 bucket. Configure Lambda and SageMaker Pipelines as destinations of the event notification. Configure s3:ObjectCreated:Put as the event type.',
      'Configure S3 replication between the S3 buckets. Configure the analysis S3 bucket to send event notifications to Amazon EventBridge (Amazon CloudWatch Events). Configure an ObjectCreated rule in EventBridge (CloudWatch Events). Configure Lambda and SageMaker Pipelines as targets for the rule.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'A solutions architect needs to help a company optimize the cost of running an application on AWS. The application will use Amazon EC2 instances, AWS Fargate, and AWS Lambda for compute within the architecture. The EC2 instances will run the data ingestion layer of the application. EC2 usage will be sporadic and unpredictable. Workloads that run on EC2 instances can be interrupted at any time. The application front end will run on Fargate, and Lambda will serve the API layer. The front-end utilization and API layer utilization will be predictable over the course of the next year. Which combination of purchasing options will provide the MOST cost-effective solution for hosting this application? (Choose two.)',
    answers: [
      'Use Spot Instances for the data ingestion layer.',
      'Use On-Demand Instances for the data ingestion layer.',
      'Purchase a 1-year Compute Savings Plan for the front end and API layer.',
      'Purchase 1-year All Upfront Reserved instances for the data ingestion layer.',
      'Purchase a 1-year EC2 instance Savings Plan for the front end and API layer.'
    ],
    correctAnswer: [0, 2]
  },
  {
    question:
      'A company runs a web-based portal that provides users with global breaking news, local alerts, and weather updates. The portal delivers each user a personalized view by using mixture of static and dynamic content. Content is served over HTTPS through an API server running on an Amazon EC2 instance behind an Application Load Balancer (ALB). The company wants the portal to provide this content to its users across the world as quickly as possible. How should a solutions architect design the application to ensure the LEAST amount of latency for all users?',
    answers: [
      'Deploy the application stack in a single AWS Region. Use Amazon CloudFront to serve all static and dynamic content by specifying the ALB as an origin.',
      'Deploy the application stack in two AWS Regions. Use an Amazon Route 53 latency routing policy to serve all content from the ALB in the closest Region.',
      'Deploy the application stack in a single AWS Region. Use Amazon CloudFront to serve the static content. Serve the dynamic content directly from the ALB.',
      'Deploy the application stack in two AWS Regions. Use an Amazon Route 53 geolocation routing policy to serve all content from the ALB in the closest Region.'
    ],
    correctAnswer: [0]
  },
  {
    question:
      'A gaming company is designing a highly available architecture. The application runs on a modified Linux kernel and supports only UDP-based traffic. The company needs the front-end tier to provide the best possible user experience. That tier must have low latency, route traffic to the nearest edge location, and provide static IP addresses for entry into the application endpoints. What should a solutions architect do to meet these requirements?',
    answers: [
      'Configure Amazon Route 53 to forward requests to an Application Load Balancer. Use AWS Lambda for the application in AWS Application Auto Scaling.',
      'Configure Amazon CloudFront to forward requests to a Network Load Balancer. Use AWS Lambda for the application in an AWS Application Auto Scaling group.',
      'Configure AWS Global Accelerator to forward requests to a Network Load Balancer. Use Amazon EC2 instances for the application in an EC2 Auto Scaling group.',
      'Configure Amazon API Gateway to forward requests to an Application Load Balancer. Use Amazon EC2 instances for the application in an EC2 Auto Scaling group.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'A company wants to migrate its existing on-premises monolithic application to AWS. The company wants to keep as much of the front-end code and the backend code as possible. However, the company wants to break the application into smaller applications. A different team will manage each application. The company needs a highly scalable solution that minimizes operational overhead. Which solution will meet these requirements?',
    answers: [
      'Host the application on AWS Lambda. Integrate the application with Amazon API Gateway.',
      'Host the application with AWS Amplify. Connect the application to an Amazon API Gateway API that is integrated with AWS Lambda.',
      'Host the application on Amazon EC2 instances. Set up an Application Load Balancer with EC2 instances in an Auto Scaling group as targets.',
      'Host the application on Amazon Elastic Container Service (Amazon ECS). Set up an Application Load Balancer with Amazon ECS as the target.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'A company recently started using Amazon Aurora as the data store for its global ecommerce application. When large reports are run, developers report that the ecommerce application is performing poorly. After reviewing metrics in Amazon CloudWatch, a solutions architect finds that the ReadIOPS and CPUUtilization metrics are spiking when monthly reports run. What is the MOST cost-effective solution?',
    answers: [
      'Migrate the monthly reporting to Amazon Redshift.',
      'Migrate the monthly reporting to an Aurora Replica.',
      'Migrate the Aurora database to a larger instance class.',
      'Increase the Provisioned IOPS on the Aurora instance.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'A company hosts a website analytics application on a single Amazon EC2 On-Demand Instance. The analytics software is written in PHP and uses a MySQL database. The analytics software, the web server that provides PHP, and the database server are all hosted on the EC2 instance. The application is showing signs of performance degradation during busy times and is presenting 5xx errors. The company needs to make the application scale seamlessly. Which solution will meet these requirements MOST cost-effectively?',
    answers: [
      'Migrate the database to an Amazon RDS for MySQL DB instance. Create an AMI of the web application. Use the AMI to launch a second EC2 On-Demand Instance. Use an Application Load Balancer to distribute the load to each EC2 instance.',
      'Migrate the database to an Amazon RDS for MySQL DB instance. Create an AMI of the web application. Use the AMI to launch a second EC2 On-Demand Instance. Use Amazon Route 53 weighted routing to distribute the load across the two EC2 instances.',
      'Migrate the database to an Amazon Aurora MySQL DB instance. Create an AWS Lambda function to stop the EC2 instance and change the instance type. Create an Amazon CloudWatch alarm to invoke the Lambda function when CPU utilization surpasses 75%.',
      'Migrate the database to an Amazon Aurora MySQL DB instance. Create an AMI of the web application. Apply the AMI to a launch template. Create an Auto Scaling group with the launch template. Configure the launch template to use a Spot Fleet. Attach an Application Load Balancer to the Auto Scaling group.'
    ],
    correctAnswer: [0]
  },
  {
    question:
      'A company runs a stateless web application in production on a group of Amazon EC2 On-Demand Instances behind an Application Load Balancer. The application experiences heavy usage during an 8-hour period each business day. Application usage is moderate and steady overnight. Application usage is low during weekends. The company wants to minimize its EC2 costs without affecting the availability of the application. Which solution will meet these requirements?',
    answers: [
      'Use Spot Instances for the entire workload.',
      'Use Reserved Instances for the baseline level of usage. Use Spot instances for any additional capacity that the application needs.',
      'Use On-Demand Instances for the baseline level of usage. Use Spot Instances for any additional capacity that the application needs.',
      'Use Dedicated Instances for the baseline level of usage. Use On-Demand Instances for any additional capacity that the application needs.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'A company needs to retain application log files for a critical application for 10 years. The application team regularly accesses logs from the past month for troubleshooting, but logs older than 1 month are rarely accessed. The application generates more than 10 TB of logs per month. Which storage option meets these requirements MOST cost-effectively?',
    answers: [
      'Store the logs in Amazon S3. Use AWS Backup to move logs more than 1 month old to S3 Glacier Deep Archive.',
      'Store the logs in Amazon S3. Use S3 Lifecycle policies to move logs more than 1 month old to S3 Glacier Deep Archive.',
      'Store the logs in Amazon CloudWatch Logs. Use AWS Backup to move logs more than 1 month old to S3 Glacier Deep Archive.',
      'Store the logs in Amazon CloudWatch Logs. Use Amazon S3 Lifecycle policies to move logs more than 1 month old to S3 Glacier Deep Archive.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'A company has a data ingestion workflow that includes the following components: An Amazon Simple Notification Service (Amazon SNS) topic that receives notifications about new data deliveries An AWS Lambda function that processes and stores the data. The ingestion workflow occasionally fails because of network connectivity issues. When failure occurs, the corresponding data is not ingested unless the company manually reruns the job. What should a solutions architect do to ensure that all notifications are eventually processed?',
    answers: [
      'Configure the Lambda function for deployment across multiple Availability Zones.',
      "Modify the Lambda function's configuration to increase the CPU and memory allocations for the function.",
      'Configure the SNS topic’s retry strategy to increase both the number of retries and the wait time between retries.',
      'Configure an Amazon Simple Queue Service (Amazon SQS) queue as the on-failure destination. Modify the Lambda function to process messages in the queue.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'A company has a service that produces event data. The company wants to use AWS to process the event data as it is received. The data is written in a specific order that must be maintained throughout processing. The company wants to implement a solution that minimizes operational overhead. How should a solutions architect accomplish this?',
    answers: [
      'Create an Amazon Simple Queue Service (Amazon SQS) FIFO queue to hold messages. Set up an AWS Lambda function to process messages from the queue.',
      'Create an Amazon Simple Notification Service (Amazon SNS) topic to deliver notifications containing payloads to process. Configure an AWS Lambda function as a subscriber.',
      'Create an Amazon Simple Queue Service (Amazon SQS) standard queue to hold messages. Set up an AWS Lambda function to process messages from the queue independently.',
      'Create an Amazon Simple Notification Service (Amazon SNS) topic to deliver notifications containing payloads to process. Configure an Amazon Simple Queue Service (Amazon SQS) queue as a subscriber.'
    ],
    correctAnswer: [0]
  },
  {
    question:
      'A company is migrating an application from on-premises servers to Amazon EC2 instances. As part of the migration design requirements, a solutions architect must implement infrastructure metric alarms. The company does not need to take action if CPU utilization increases to more than 50% for a short burst of time. However, if the CPU utilization increases to more than 50% and read IOPS on the disk are high at the same time, the company needs to act as soon as possible. The solutions architect also must reduce false alarms. What should the solutions architect do to meet these requirements?',
    answers: [
      'Create Amazon CloudWatch composite alarms where possible.',
      'Create Amazon CloudWatch dashboards to visualize the metrics and react to issues quickly.',
      'Create Amazon CloudWatch Synthetics canaries to monitor the application and raise an alarm.',
      'Create single Amazon CloudWatch metric alarms with multiple metric thresholds where possible.'
    ],
    correctAnswer: [0]
  },
  {
    question:
      "A company wants to migrate its on-premises data center to AWS. According to the company's compliance requirements, the company can use only the ap-northeast-3 Region. Company administrators are not permitted to connect VPCs to the internet. Which solutions will meet these requirements? (Choose two.)",
    answers: [
      'Use AWS Control Tower to implement data residency guardrails to deny internet access and deny access to all AWS Regions except ap-northeast-3.',
      'Use rules in AWS WAF to prevent internet access. Deny access to all AWS Regions except ap-northeast-3 in the AWS account settings.',
      'Use AWS Organizations to configure service control policies (SCPS) that prevent VPCs from gaining internet access. Deny access to all AWS Regions except ap-northeast-3.',
      'Create an outbound rule for the network ACL in each VPC to deny all traffic from 0.0.0.0/0. Create an IAM policy for each user to prevent the use of any AWS Region other than ap-northeast-3.',
      'Use AWS Config to activate managed rules to detect and alert for internet gateways and to detect and alert for new resources deployed outside of ap-northeast-3.'
    ],
    correctAnswer: [0, 2]
  },
  {
    question:
      'A company uses a three-tier web application to provide training to new employees. The application is accessed for only 12 hours every day. The company is using an Amazon RDS for MySQL DB instance to store information and wants to minimize costs. What should a solutions architect do to meet these requirements?',
    answers: [
      'Configure an IAM policy for AWS Systems Manager Session Manager. Create an IAM role for the policy. Update the trust relationship of the role. Set up automatic start and stop for the DB instance.',
      'Create an Amazon ElastiCache for Redis cache cluster that gives users the ability to access the data from the cache when the DB instance is stopped. Invalidate the cache after the DB instance is started.',
      'Launch an Amazon EC2 instance. Create an IAM role that grants access to Amazon RDS. Attach the role to the EC2 instance. Configure a cron job to start and stop the EC2 instance on the desired schedule.',
      'Create AWS Lambda functions to start and stop the DB instance. Create Amazon EventBridge (Amazon CloudWatch Events) scheduled rules to invoke the Lambda functions. Configure the Lambda functions as event targets for the rules.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'A company sells ringtones created from clips of popular songs. The files containing the ringtones are stored in Amazon S3 Standard and are at least 128 KB in size. The company has millions of files, but downloads are infrequent for ringtones older than 90 days. The company needs to save money on storage while keeping the most accessed files readily available for its users. Which action should the company take to meet these requirements MOST cost-effectively?',
    answers: [
      'Configure S3 Standard-Infrequent Access (S3 Standard-IA) storage for the initial storage tier of the objects.',
      'Move the files to S3 Intelligent-Tiering and configure it to move objects to a less expensive storage tier after 90 days.',
      'Configure S3 inventory to manage objects and move them to S3 Standard-Infrequent Access (S3 Standard-1A) after 90 days.',
      'Implement an S3 Lifecycle policy that moves the objects from S3 Standard to S3 Standard-Infrequent Access (S3 Standard-1A) after 90 days.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'A company needs to save the results from a medical trial to an Amazon S3 repository. The repository must allow a few scientists to add new files and must restrict all other users to read-only access. No users can have the ability to modify or delete any files in the repository. The company must keep every file in the repository for a minimum of 1 year after its creation date. Which solution will meet these requirements?',
    answers: [
      'Use S3 Object Lock in governance mode with a legal hold of 1 year.',
      'Use S3 Object Lock in compliance mode with a retention period of 365 days.',
      'Use an IAM role to restrict all users from deleting or changing objects in the S3 bucket. Use an S3 bucket policy to only allow the IAM role.',
      'Configure the S3 bucket to invoke an AWS Lambda function every time an object is added. Configure the function to track the hash of the saved object so that modified objects can be marked accordingly.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'A large media company hosts a web application on AWS. The company wants to start caching confidential media files so that users around the world will have reliable access to the files. The content is stored in Amazon S3 buckets. The company must deliver the content quickly, regardless of where the requests originate geographically. Which solution will meet these requirements?',
    answers: [
      'Use AWS DataSync to connect the S3 buckets to the web application.',
      'Deploy AWS Global Accelerator to connect the S3 buckets to the web application.',
      'Deploy Amazon CloudFront to connect the S3 buckets to CloudFront edge servers.',
      'Use Amazon Simple Queue Service (Amazon SQS) to connect the S3 buckets to the web application.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'A company produces batch data that comes from different databases. The company also produces live stream data from network sensors and application APIs. The company needs to consolidate all the data into one place for business analytics. The company needs to process the incoming data and then stage the data in different Amazon S3 buckets. Teams will later run one-time queries and import the data into a business intelligence tool to show key performance indicators (KPIs). Which combination of steps will meet these requirements with the LEAST operational overhead? (Choose two.)',
    answers: [
      'Use Amazon Athena for one-time queries. Use Amazon QuickSight to create dashboards for KPIs.',
      'Use Amazon Kinesis Data Analytics for one-time queries. Use Amazon QuickSight to create dashboards for KPIs.',
      'Create custom AWS Lambda functions to move the individual records from the databases to an Amazon Redshift cluster.',
      'Use an AWS Glue extract, transform, and load (ETL) job to convert the data into JSON format. Load the data into multiple Amazon OpenSearch Service (Amazon Elasticsearch Service) clusters.',
      'Use blueprints in AWS Lake Formation to identify the data that can be ingested into a data lake. Use AWS Glue to crawl the source, extract the data, and load the data into Amazon S3 in Apache Parquet format.'
    ],
    correctAnswer: [0, 4]
  },
  {
    question:
      'A company stores data in an Amazon Aurora PostgreSQL DB cluster. The company must store all the data for 5 years and must delete all the data after 5 years. The company also must indefinitely keep audit logs of actions that are performed within the database. Currently, the company has automated backups configured for Aurora. Which combination of steps should a solutions architect take to meet these requirements? (Choose two.)',
    answers: [
      'Take a manual snapshot of the DB cluster.',
      'Create a lifecycle policy for the automated backups.',
      'Configure automated backup retention for 5 years.',
      'Configure an Amazon CloudWatch Logs export for the DB cluster.',
      'Use AWS Backup to take the backups and to keep the backups for 5 years.'
    ],
    correctAnswer: [3, 4]
  },
  {
    question:
      'A solutions architect is optimizing a website for an upcoming musical event. Videos of the performances will be streamed in real time and then will be available on demand. The event is expected to attract a global online audience. Which service will improve the performance of both the real-time and on-demand streaming?',
    answers: [
      'Amazon CloudFront',
      'AWS Global Accelerator',
      'Amazon Route 53',
      'Amazon S3 Transfer Acceleration'
    ],
    correctAnswer: [0]
  },
  {
    question:
      'A company is running a publicly accessible serverless application that uses Amazon API Gateway and AWS Lambda. The application’s traffic recently spiked due to fraudulent requests from botnets. Which steps should a solutions architect take to block requests from unauthorized users? (Choose two.)',
    answers: [
      'Create a usage plan with an API key that is shared with genuine users only.',
      'Integrate logic within the Lambda function to ignore the requests from fraudulent IP addresses.',
      'Implement an AWS WAF rule to target malicious requests and trigger actions to filter them out.',
      'Convert the existing public API to a private API. Update the DNS records to redirect users to the new API endpoint.',
      'Create an IAM role for each user attempting to access the API. A user will assume the role when making the API call.'
    ],
    correctAnswer: [0, 2]
  },
  {
    question:
      'An ecommerce company hosts its analytics application in the AWS Cloud. The application generates about 300 MB of data each month. The data is stored in JSON format. The company is evaluating a disaster recovery solution to back up the data. The data must be accessible in milliseconds if it is needed, and the data must be kept for 30 days. Which solution meets these requirements MOST cost-effectively?',
    answers: [
      'Amazon OpenSearch Service (Amazon Elasticsearch Service)',
      'Amazon S3 Glacier',
      'Amazon S3 Standard',
      'Amazon RDS for PostgreSQL'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'A company has a small Python application that processes JSON documents and outputs the results to an on-premises SQL database. The application runs thousands of times each day. The company wants to move the application to the AWS Cloud. The company needs a highly available solution that maximizes scalability and minimizes operational overhead. Which solution will meet these requirements?',
    answers: [
      'Place the JSON documents in an Amazon S3 bucket. Run the Python code on multiple Amazon EC2 instances to process the documents. Store the results in an Amazon Aurora DB cluster.',
      'Place the JSON documents in an Amazon S3 bucket. Create an AWS Lambda function that runs the Python code to process the documents as they arrive in the S3 bucket. Store the results in an Amazon Aurora DB cluster.',
      'Place the JSON documents in an Amazon Elastic Block Store (Amazon EBS) volume. Use the EBS Multi-Attach feature to attach the volume to multiple Amazon EC2 instances. Run the Python code on the EC2 instances to process the documents. Store the results on an Amazon RDS DB instance.',
      'Place the JSON documents in an Amazon Simple Queue Service (Amazon SQS) queue as messages. Deploy the Python code as a container on an Amazon Elastic Container Service (Amazon ECS) cluster that is configured with the Amazon EC2 launch type. Use the container to process the SQS messages. Store the results on an Amazon RDS DB instance.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'A company wants to use high performance computing (HPC) infrastructure on AWS for financial risk modeling. The company’s HPC workloads run on Linux. Each HPC workflow runs on hundreds of Amazon EC2 Spot Instances, is short-lived, and generates thousands of output files that are ultimately stored in persistent storage for analytics and long-term future use. The company seeks a cloud storage solution that permits the copying of on-premises data to long-term persistent storage to make data available for processing by all EC2 instances. The solution should also be a high performance file system that is integrated with persistent storage to read and write datasets and output files. Which combination of AWS services meets these requirements?',
    answers: [
      'Amazon FSx for Lustre integrated with Amazon S3',
      'Amazon FSx for Windows File Server integrated with Amazon S3',
      'Amazon S3 Glacier integrated with Amazon Elastic Block Store (Amazon EBS)',
      'Amazon S3 bucket with a VPC endpoint integrated with an Amazon Elastic Block Store (Amazon EBS) General Purpose SSD (gp2) volume'
    ],
    correctAnswer: [0]
  },
  {
    question:
      'A company is building a containerized application on premises and decides to move the application to AWS. The application will have thousands of users soon after it is deployed. The company is unsure how to manage the deployment of containers at scale. The company needs to deploy the containerized application in a highly available architecture that minimizes operational overhead. Which solution will meet these requirements?',
    answers: [
      'Store container images in an Amazon Elastic Container Registry (Amazon ECR) repository. Use an Amazon Elastic Container Service (Amazon ECS) cluster with the AWS Fargate launch type to run the containers. Use target tracking to scale automatically based on demand.',
      'Store container images in an Amazon Elastic Container Registry (Amazon ECR) repository. Use an Amazon Elastic Container Service (Amazon ECS) cluster with the Amazon EC2 launch type to run the containers. Use target tracking to scale automatically based on demand.',
      'Store container images in a repository that runs on an Amazon EC2 instance. Run the containers on EC2 instances that are spread across multiple Availability Zones. Monitor the average CPU utilization in Amazon CloudWatch. Launch new EC2 instances as needed.',
      'Create an Amazon EC2 Amazon Machine Image (AMI) that contains the container image. Launch EC2 instances in an Auto Scaling group across multiple Availability Zones. Use an Amazon CloudWatch alarm to scale out EC2 instances when the average CPU utilization threshold is breached.'
    ],
    correctAnswer: [0]
  },
  {
    question:
      'A company has two applications: a sender application that sends messages with payloads to be processed and a processing application intended to receive the messages with payloads. The company wants to implement an AWS service to handle messages between the two applications. The sender application can send about 1,000 messages each hour. The messages may take up to 2 days to be processed: If the messages fail to process, they must be retained so that they do not impact the processing of any remaining messages. Which solution meets these requirements and is the MOST operationally efficient?',
    answers: [
      'Set up an Amazon EC2 instance running a Redis database. Configure both applications to use the instance. Store, process, and delete the messages, respectively.',
      'Use an Amazon Kinesis data stream to receive the messages from the sender application. Integrate the processing application with the Kinesis Client Library (KCL).',
      'Integrate the sender and processor applications with an Amazon Simple Queue Service (Amazon SQS) queue. Configure a dead-letter queue to collect the messages that failed to process.',
      'Subscribe the processing application to an Amazon Simple Notification Service (Amazon SNS) topic to receive notifications to process. Integrate the sender application to write to the SNS topic.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'A solutions architect must design a solution that uses Amazon CloudFront with an Amazon S3 origin to store a static website. The company’s security policy requires that all website traffic be inspected by AWS WAF. How should the solutions architect comply with these requirements?',
    answers: [
      'Configure an S3 bucket policy to accept requests coming from the AWS WAF Amazon Resource Name (ARN) only.',
      'Configure Amazon CloudFront to forward all incoming requests to AWS WAF before requesting content from the S3 origin.',
      'Configure a security group that allows Amazon CloudFront IP addresses to access Amazon S3 only. Associate AWS WAF to CloudFront.',
      'Configure Amazon CloudFront and Amazon S3 to use an origin access identity (OAI) to restrict access to the S3 bucket. Enable AWS WAF on the distribution.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'Organizers for a global event want to put daily reports online as static HTML pages. The pages are expected to generate millions of views from users around the world. The files are stored in an Amazon S3 bucket. A solutions architect has been asked to design an efficient and effective solution. Which action should the solutions architect take to accomplish this?',
    answers: [
      'Generate presigned URLs for the files.',
      'Use cross-Region replication to all Regions.',
      'Use the geoproximity feature of Amazon Route 53.',
      'Use Amazon CloudFront with the S3 bucket as its origin.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'A company runs a production application on a fleet of Amazon EC2 instances. The application reads the data from an Amazon SQS queue and processes the messages in parallel. The message volume is unpredictable and often has intermittent traffic. This application should continually process messages without any downtime. Which solution meets these requirements MOST cost-effectively?',
    answers: [
      'Use Spot Instances exclusively to handle the maximum capacity required.',
      'Use Reserved Instances exclusively to handle the maximum capacity required.',
      'Use Reserved Instances for the baseline capacity and use Spot Instances to handle additional capacity.',
      'Use Reserved Instances for the baseline capacity and use On-Demand Instances to handle additional capacity.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'A security team wants to limit access to specific services or actions in all of the team’s AWS accounts. All accounts belong to a large organization in AWS Organizations. The solution must be scalable and there must be a single point where permissions can be maintained. What should a solutions architect do to accomplish this?',
    answers: [
      'Create an ACL to provide access to the services or actions.',
      'Create a security group to allow accounts and attach it to user groups.',
      'Create cross-account roles in each account to deny access to the services or actions.',
      'Create a service control policy in the root organizational unit to deny access to the services or actions.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'A company is concerned about the security of its public web application due to recent web attacks. The application uses an Application Load Balancer (ALB). A solutions architect must reduce the risk of DDoS attacks against the application. What should the solutions architect do to meet this requirement?',
    answers: [
      'Add an Amazon Inspector agent to the ALB.',
      'Configure Amazon Macie to prevent attacks.',
      'Enable AWS Shield Advanced to prevent attacks.',
      'Configure Amazon GuardDuty to monitor the ALB.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'A company’s web application is running on Amazon EC2 instances behind an Application Load Balancer. The company recently changed its policy, which now requires the application to be accessed from one specific country only. Which configuration will meet this requirement?',
    answers: [
      'Configure the security group for the EC2 instances.',
      'Configure the security group on the Application Load Balancer.',
      'Configure AWS WAF on the Application Load Balancer in a VPC.',
      'Configure the network ACL for the subnet that contains the EC2 instances.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'A company provides an API to its users that automates inquiries for tax computations based on item prices. The company experiences a larger number of inquiries during the holiday season only that cause slower response times. A solutions architect needs to design a solution that is scalable and elastic. What should the solutions architect do to accomplish this?',
    answers: [
      'Provide an API hosted on an Amazon EC2 instance. The EC2 instance performs the required computations when the API request is made.',
      'Design a REST API using Amazon API Gateway that accepts the item names. API Gateway passes item names to AWS Lambda for tax computations.',
      'Create an Application Load Balancer that has two Amazon EC2 instances behind it. The EC2 instances will compute the tax on the received item names.',
      'Design a REST API using Amazon API Gateway that connects with an API hosted on an Amazon EC2 instance. API Gateway accepts and passes the item names to the EC2 instance for tax computations.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'A solutions architect is creating a new Amazon CloudFront distribution for an application. Some of the information submitted by users is sensitive. The application uses HTTPS but needs another layer of security. The sensitive information should be protected throughout the entire application stack, and access to the information should be restricted to certain applications. Which action should the solutions architect take?',
    answers: [
      'Configure a CloudFront signed URL.',
      'Configure a CloudFront signed cookie.',
      'Configure a CloudFront field-level encryption profile.',
      'Configure CloudFront and set the Origin Protocol Policy setting to HTTPS Only for the Viewer Protocol Policy.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'A gaming company hosts a browser-based application on AWS. The users of the application consume a large number of videos and images that are stored in Amazon S3. This content is the same for all users. The application has increased in popularity, and millions of users worldwide accessing these media files. The company wants to provide the files to the users while reducing the load on the origin. Which solution meets these requirements MOST cost-effectively?',
    answers: [
      'Deploy an AWS Global Accelerator accelerator in front of the web servers.',
      'Deploy an Amazon CloudFront web distribution in front of the S3 bucket.',
      'Deploy an Amazon ElastiCache for Redis instance in front of the web servers.',
      'Deploy an Amazon ElastiCache for Memcached instance in front of the web servers.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'A company has a multi-tier application that runs six front-end web servers in an Amazon EC2 Auto Scaling group in a single Availability Zone behind an Application Load Balancer (ALB). A solutions architect needs to modify the infrastructure to be highly available without modifying the application. Which architecture should the solutions architect choose that provides high availability?',
    answers: [
      'Create an Auto Scaling group that uses three instances across each of two Regions.',
      'Modify the Auto Scaling group to use three instances across each of two Availability Zones.',
      'Create an Auto Scaling template that can be used to quickly create more instances in another Region.',
      'Change the ALB in front of the Amazon EC2 instances in a round-robin configuration to balance traffic to the web tier.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'An ecommerce company has an order-processing application that uses Amazon API Gateway and an AWS Lambda function. The application stores data in an Amazon Aurora PostgreSQL database. During a recent sales event, a sudden surge in customer orders occurred. Some customers experienced timeouts, and the application did not process the orders of those customers. A solutions architect determined that the CPU utilization and memory utilization were high on the database because of a large number of open connections. The solutions architect needs to prevent the timeout errors while making the least possible changes to the application. Which solution will meet these requirements?',
    answers: [
      'Configure provisioned concurrency for the Lambda function. Modify the database to be a global database in multiple AWS Regions.',
      'Use Amazon RDS Proxy to create a proxy for the database. Modify the Lambda function to use the RDS Proxy endpoint instead of the database endpoint.',
      'Create a read replica for the database in a different AWS Region. Use query string parameters in API Gateway to route traffic to the read replica.',
      'Migrate the data from Aurora PostgreSQL to Amazon DynamoDB by using AWS Database Migration Service (AWS DMS). Modify the Lambda function to use the DynamoDB table.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'An application runs on Amazon EC2 instances in private subnets. The application needs to access an Amazon DynamoDB table. What is the MOST secure way to access the table while ensuring that the traffic does not leave the AWS network?',
    answers: [
      'Use a VPC endpoint for DynamoDB.',
      'Use a NAT gateway in a public subnet.',
      'Use a NAT instance in a private subnet.',
      'Use the internet gateway attached to the VPC.'
    ],
    correctAnswer: [0]
  },
  {
    question:
      'An entertainment company is using Amazon DynamoDB to store media metadata. The application is read intensive and experiencing delays. The company does not have staff to handle additional operational overhead and needs to improve the performance efficiency of DynamoDB without reconfiguring the application. What should a solutions architect recommend to meet this requirement?',
    answers: [
      'Use Amazon ElastiCache for Redis.',
      'Use Amazon DynamoDB Accelerator (DAX).',
      'Replicate data by using DynamoDB global tables.',
      'Use Amazon ElastiCache for Memcached with Auto Discovery enabled.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'A company’s infrastructure consists of Amazon EC2 instances and an Amazon RDS DB instance in a single AWS Region. The company wants to back up its data in a separate Region. Which solution will meet these requirements with the LEAST operational overhead?',
    answers: [
      'Use AWS Backup to copy EC2 backups and RDS backups to the separate Region.',
      'Use Amazon Data Lifecycle Manager (Amazon DLM) to copy EC2 backups and RDS backups to the separate Region.',
      'Create Amazon Machine Images (AMIs) of the EC2 instances. Copy the AMIs to the separate Region. Create a read replica for the RDS DB instance in the separate Region.',
      'Create Amazon Elastic Block Store (Amazon EBS) snapshots. Copy the EBS snapshots to the separate Region. Create RDS snapshots. Export the RDS snapshots to Amazon S3. Configure S3 Cross-Region Replication (CRR) to the separate Region.'
    ],
    correctAnswer: [0]
  },
  {
    question:
      'A solutions architect needs to securely store a database user name and password that an application uses to access an Amazon RDS DB instance. The application that accesses the database runs on an Amazon EC2 instance. The solutions architect wants to create a secure parameter in AWS Systems Manager Parameter Store. What should the solutions architect do to meet this requirement?',
    answers: [
      'Create an IAM role that has read access to the Parameter Store parameter. Allow Decrypt access to an AWS Key Management Service (AWS KMS) key that is used to encrypt the parameter. Assign this IAM role to the EC2 instance.',
      'Create an IAM policy that allows read access to the Parameter Store parameter. Allow Decrypt access to an AWS Key Management Service (AWS KMS) key that is used to encrypt the parameter. Assign this IAM policy to the EC2 instance.',
      'Create an IAM trust relationship between the Parameter Store parameter and the EC2 instance. Specify Amazon RDS as a principal in the trust policy.',
      'Create an IAM trust relationship between the DB instance and the EC2 instance. Specify Systems Manager as a principal in the trust policy.'
    ],
    correctAnswer: [0]
  },
  {
    question:
      'A company is designing a cloud communications platform that is driven by APIs. The application is hosted on Amazon EC2 instances behind a Network Load Balancer (NLB). The company uses Amazon API Gateway to provide external users with access to the application through APIs. The company wants to protect the platform against web exploits like SQL injection and also wants to detect and mitigate large, sophisticated DDoS attacks. Which combination of solutions provides the MOST protection? (Choose two.)',
    answers: [
      'Use AWS WAF to protect the NLB.',
      'Use AWS Shield Advanced with the NLB.',
      'Use AWS WAF to protect Amazon API Gateway.',
      'Use Amazon GuardDuty with AWS Shield Standard',
      'Use AWS Shield Standard with Amazon API Gateway.'
    ],
    correctAnswer: [1, 2]
  },
  {
    question:
      'A company has a legacy data processing application that runs on Amazon EC2 instances. Data is processed sequentially, but the order of results does not matter. The application uses a monolithic architecture. The only way that the company can scale the application to meet increased demand is to increase the size of the instances. The company’s developers have decided to rewrite the application to use a microservices architecture on Amazon Elastic Container Service (Amazon ECS). What should a solutions architect recommend for communication between the microservices?',
    answers: [
      'Create an Amazon Simple Queue Service (Amazon SQS) queue. Add code to the data producers, and send data to the queue. Add code to the data consumers to process data from the queue.',
      'Create an Amazon Simple Notification Service (Amazon SNS) topic. Add code to the data producers, and publish notifications to the topic. Add code to the data consumers to subscribe to the topic.',
      'Create an AWS Lambda function to pass messages. Add code to the data producers to call the Lambda function with a data object. Add code to the data consumers to receive a data object that is passed from the Lambda function.',
      'Create an Amazon DynamoDB table. Enable DynamoDB Streams. Add code to the data producers to insert data into the table. Add code to the data consumers to use the DynamoDB Streams API to detect new table entries and retrieve the data.'
    ],
    correctAnswer: [0]
  },
  {
    question:
      'A company wants to migrate its MySQL database from on premises to AWS. The company recently experienced a database outage that significantly impacted the business. To ensure this does not happen again, the company wants a reliable database solution on AWS that minimizes data loss and stores every transaction on at least two nodes. Which solution meets these requirements?',
    answers: [
      'Create an Amazon RDS DB instance with synchronous replication to three nodes in three Availability Zones.',
      'Create an Amazon RDS MySQL DB instance with Multi-AZ functionality enabled to synchronously replicate the data.',
      'Create an Amazon RDS MySQL DB instance and then create a read replica in a separate AWS Region that synchronously replicates the data.',
      'Create an Amazon EC2 instance with a MySQL engine installed that triggers an AWS Lambda function to synchronously replicate the data to an Amazon RDS MySQL DB instance.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'A company is building a new dynamic ordering website. The company wants to minimize server maintenance and patching. The website must be highly available and must scale read and write capacity as quickly as possible to meet changes in user demand. Which solution will meet these requirements?',
    answers: [
      'Host static content in Amazon S3. Host dynamic content by using Amazon API Gateway and AWS Lambda. Use Amazon DynamoDB with on-demand capacity for the database. Configure Amazon CloudFront to deliver the website content.',
      'Host static content in Amazon S3. Host dynamic content by using Amazon API Gateway and AWS Lambda. Use Amazon Aurora with Aurora Auto Scaling for the database. Configure Amazon CloudFront to deliver the website content.',
      'Host all the website content on Amazon EC2 instances. Create an Auto Scaling group to scale the EC2 instances. Use an Application Load Balancer to distribute traffic. Use Amazon DynamoDB with provisioned write capacity for the database.',
      'Host all the website content on Amazon EC2 instances. Create an Auto Scaling group to scale the EC2 instances. Use an Application Load Balancer to distribute traffic. Use Amazon Aurora with Aurora Auto Scaling for the database.'
    ],
    correctAnswer: [0]
  },
  {
    question:
      'A company has an AWS account used for software engineering. The AWS account has access to the company’s on-premises data center through a pair of AWS Direct Connect connections. All non-VPC traffic routes to the virtual private gateway. A development team recently created an AWS Lambda function through the console. The development team needs to allow the function to access a database that runs in a private subnet in the company’s data center. Which solution will meet these requirements?',
    answers: [
      'Configure the Lambda function to run in the VPC with the appropriate security group.',
      'Set up a VPN connection from AWS to the data center. Route the traffic from the Lambda function through the VPN.',
      'Update the route tables in the VPC to allow the Lambda function to access the on-premises data center through Direct Connect.',
      'Create an Elastic IP address. Configure the Lambda function to send traffic through the Elastic IP address without an elastic network interface.'
    ],
    correctAnswer: [0]
  },
  {
    question:
      'A company runs an application using Amazon ECS. The application creates resized versions of an original image and then makes Amazon S3 API calls to store the resized images in Amazon S3. How can a solutions architect ensure that the application has permission to access Amazon S3?',
    answers: [
      'Update the S3 role in AWS IAM to allow read/write access from Amazon ECS, and then relaunch the container.',
      'Create an IAM role with S3 permissions, and then specify that role as the taskRoleArn in the task definition.',
      'Create a security group that allows access from Amazon ECS to Amazon S3, and update the launch configuration used by the ECS cluster.',
      'Create an IAM user with S3 permissions, and then relaunch the Amazon EC2 instances for the ECS cluster while logged in as this account.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'A company has a Windows-based application that must be migrated to AWS. The application requires the use of a shared Windows file system attached to multiple Amazon EC2 Windows instances that are deployed across multiple Availability Zone: What should a solutions architect do to meet this requirement?',
    answers: [
      'Configure AWS Storage Gateway in volume gateway mode. Mount the volume to each Windows instance.',
      'Configure Amazon FSx for Windows File Server. Mount the Amazon FSx file system to each Windows instance.',
      'Configure a file system by using Amazon Elastic File System (Amazon EFS). Mount the EFS file system to each Windows instance.',
      'Configure an Amazon Elastic Block Store (Amazon EBS) volume with the required size. Attach each EC2 instance to the volume. Mount the file system within the volume to each Windows instance.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'A company is developing an ecommerce application that will consist of a load-balanced front end, a container-based application, and a relational database. A solutions architect needs to create a highly available solution that operates with as little manual intervention as possible. Which solutions meet these requirements? (Choose two.)',
    answers: [
      'Create an Amazon RDS DB instance in Multi-AZ mode.',
      'Create an Amazon RDS DB instance and one or more replicas in another Availability Zone.',
      'Create an Amazon EC2 instance-based Docker cluster to handle the dynamic application load.',
      'Create an Amazon Elastic Container Service (Amazon ECS) cluster with a Fargate launch type to handle the dynamic application load.',
      'Create an Amazon Elastic Container Service (Amazon ECS) cluster with an Amazon EC2 launch type to handle the dynamic application load.'
    ],
    correctAnswer: [0, 3]
  },
  {
    question:
      'A company uses Amazon S3 as its data lake. The company has a new partner that must use SFTP to upload data files. A solutions architect needs to implement a highly available SFTP solution that minimizes operational overhead. Which solution will meet these requirements?',
    answers: [
      'Use AWS Transfer Family to configure an SFTP-enabled server with a publicly accessible endpoint. Choose the S3 data lake as the destination.',
      'Use Amazon S3 File Gateway as an SFTP server. Expose the S3 File Gateway endpoint URL to the new partner. Share the S3 File Gateway endpoint with the new partner.',
      'Launch an Amazon EC2 instance in a private subnet in a VPC. Instruct the new partner to upload files to the EC2 instance by using a VPN. Run a cron job script, on the EC2 instance to upload files to the S3 data lake.',
      'Launch Amazon EC2 instances in a private subnet in a VPC. Place a Network Load Balancer (NLB) in front of the EC2 instances. Create an SFTP listener port for the NLB. Share the NLB hostname with the new partner. Run a cron job script on the EC2 instances to upload files to the S3 data lake.'
    ],
    correctAnswer: [0]
  },
  {
    question:
      'A company needs to store contract documents. A contract lasts for 5 years. During the 5-year period, the company must ensure that the documents cannot be overwritten or deleted. The company needs to encrypt the documents at rest and rotate the encryption keys automatically every year. Which combination of steps should a solutions architect take to meet these requirements with the LEAST operational overhead? (Choose two.)',
    answers: [
      'Store the documents in Amazon S3. Use S3 Object Lock in governance mode.',
      'Store the documents in Amazon S3. Use S3 Object Lock in compliance mode.',
      'Use server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Configure key rotation.',
      'Use server-side encryption with AWS Key Management Service (AWS KMS) customer managed keys. Configure key rotation.',
      'Use server-side encryption with AWS Key Management Service (AWS KMS) customer provided (imported) keys. Configure key rotation.'
    ],
    correctAnswer: [1, 3]
  },
  {
    question:
      'A company has a web application that is based on Java and PHP. The company plans to move the application from on premises to AWS. The company needs the ability to test new site features frequently. The company also needs a highly available and managed solution that requires minimum operational overhead. Which solution will meet these requirements?',
    answers: [
      'Create an Amazon S3 bucket. Enable static web hosting on the S3 bucket. Upload the static content to the S3 bucket. Use AWS Lambda to process all dynamic content.',
      'Deploy the web application to an AWS Elastic Beanstalk environment. Use URL swapping to switch between multiple Elastic Beanstalk environments for feature testing.',
      'Deploy the web application to Amazon EC2 instances that are configured with Java and PHP. Use Auto Scaling groups and an Application Load Balancer to manage the website’s availability.',
      'Containerize the web application. Deploy the web application to Amazon EC2 instances. Use the AWS Load Balancer Controller to dynamically route traffic between containers that contain the new site features for testing.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'A company has an ordering application that stores customer information in Amazon RDS for MySQL. During regular business hours, employees run one-time queries for reporting purposes. Timeouts are occurring during order processing because the reporting queries are taking a long time to run. The company needs to eliminate the timeouts without preventing employees from performing queries. What should a solutions architect do to meet these requirements?',
    answers: [
      'Create a read replica. Move reporting queries to the read replica.',
      'Create a read replica. Distribute the ordering application to the primary DB instance and the read replica.',
      'Migrate the ordering application to Amazon DynamoDB with on-demand capacity.',
      'Schedule the reporting queries for non-peak hours.'
    ],
    correctAnswer: [0]
  },
  {
    question:
      'A hospital wants to create digital copies for its large collection of historical written records. The hospital will continue to add hundreds of new documents each day. The hospital’s data team will scan the documents and will upload the documents to the AWS Cloud. A solutions architect must implement a solution to analyze the documents, extract the medical information, and store the documents so that an application can run SQL queries on the data. The solution must maximize scalability and operational efficiency. Which combination of steps should the solutions architect take to meet these requirements? (Choose two.)',
    answers: [
      'Write the document information to an Amazon EC2 instance that runs a MySQL database.',
      'Write the document information to an Amazon S3 bucket. Use Amazon Athena to query the data.',
      'Create an Auto Scaling group of Amazon EC2 instances to run a custom application that processes the scanned files and extracts the medical information.',
      'Create an AWS Lambda function that runs when new documents are uploaded. Use Amazon Rekognition to convert the documents to raw text. Use Amazon Transcribe Medical to detect and extract relevant medical information from the text.',
      'Create an AWS Lambda function that runs when new documents are uploaded. Use Amazon Textract to convert the documents to raw text. Use Amazon Comprehend Medical to detect and extract relevant medical information from the text.'
    ],
    correctAnswer: [1, 4]
  },
  {
    question:
      'A company is running a batch application on Amazon EC2 instances. The application consists of a backend with multiple Amazon RDS databases. The application is causing a high number of reads on the databases. A solutions architect must reduce the number of database reads while ensuring high availability. What should the solutions architect do to meet this requirement?',
    answers: [
      'Add Amazon RDS read replicas.',
      'Use Amazon ElastiCache for Redis.',
      'Use Amazon Route 53 DNS caching',
      'Use Amazon ElastiCache for Memcached.'
    ],
    correctAnswer: [0]
  },
  {
    question:
      'A company needs to run a critical application on AWS. The company needs to use Amazon EC2 for the application’s database. The database must be highly available and must fail over automatically if a disruptive event occurs. Which solution will meet these requirements?',
    answers: [
      'Launch two EC2 instances, each in a different Availability Zone in the same AWS Region. Install the database on both EC2 instances. Configure the EC2 instances as a cluster. Set up database replication.',
      'Launch an EC2 instance in an Availability Zone. Install the database on the EC2 instance. Use an Amazon Machine Image (AMI) to back up the data. Use AWS CloudFormation to automate provisioning of the EC2 instance if a disruptive event occurs.',
      'Launch two EC2 instances, each in a different AWS Region. Install the database on both EC2 instances. Set up database replication. Fail over the database to a second Region.',
      'Launch an EC2 instance in an Availability Zone. Install the database on the EC2 instance. Use an Amazon Machine Image (AMI) to back up the data. Use EC2 automatic recovery to recover the instance if a disruptive event occurs.'
    ],
    correctAnswer: [0]
  },
  {
    question:
      'A company’s order system sends requests from clients to Amazon EC2 instances. The EC2 instances process the orders and then store the orders in a database on Amazon RDS. Users report that they must reprocess orders when the system fails. The company wants a resilient solution that can process orders automatically if a system outage occurs. What should a solutions architect do to meet these requirements?',
    answers: [
      'Move the EC2 instances into an Auto Scaling group. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to target an Amazon Elastic Container Service (Amazon ECS) task.',
      'Move the EC2 instances into an Auto Scaling group behind an Application Load Balancer (ALB). Update the order system to send messages to the ALB endpoint.',
      'Move the EC2 instances into an Auto Scaling group. Configure the order system to send messages to an Amazon Simple Queue Service (Amazon SQS) queue. Configure the EC2 instances to consume messages from the queue.',
      'Create an Amazon Simple Notification Service (Amazon SNS) topic. Create an AWS Lambda function, and subscribe the function to the SNS topic. Configure the order system to send messages to the SNS topic. Send a command to the EC2 instances to process the messages by using AWS Systems Manager Run Command.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'A company runs an application on a large fleet of Amazon EC2 instances. The application reads and writes entries into an Amazon DynamoDB table. The size of the DynamoDB table continuously grows, but the application needs only data from the last 30 days. The company needs a solution that minimizes cost and development effort. Which solution meets these requirements?',
    answers: [
      'Use an AWS CloudFormation template to deploy the complete solution. Redeploy the CloudFormation stack every 30 days, and delete the original stack.',
      'Use an EC2 instance that runs a monitoring application from AWS Marketplace. Configure the monitoring application to use Amazon DynamoDB Streams to store the timestamp when a new item is created in the table. Use a script that runs on the EC2 instance to delete items that have a timestamp that is older than 30 days.',
      'Configure Amazon DynamoDB Streams to invoke an AWS Lambda function when a new item is created in the table. Configure the Lambda function to delete items in the table that are older than 30 days.',
      'Extend the application to add an attribute that has a value of the current timestamp plus 30 days to each new item that is created in the table. Configure DynamoDB to use the attribute as the TTL attribute.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'A company has a Microsoft .NET application that runs on an on-premises Windows Server. The application stores data by using an Oracle Database Standard Edition server. The company is planning a migration to AWS and wants to minimize development changes while moving the application. The AWS application environment should be highly available. Which combination of actions should the company take to meet these requirements? (Choose two.)',
    answers: [
      'Refactor the application as serverless with AWS Lambda functions running .NET Core.',
      'Rehost the application in AWS Elastic Beanstalk with the .NET platform in a Multi-AZ deployment.',
      'Replatform the application to run on Amazon EC2 with the Amazon Linux Amazon Machine Image (AMI).',
      'Use AWS Database Migration Service (AWS DMS) to migrate from the Oracle database to Amazon DynamoDB in a Multi-AZ deployment.',
      'Use AWS Database Migration Service (AWS DMS) to migrate from the Oracle database to Oracle on Amazon RDS in a Multi-AZ deployment.'
    ],
    correctAnswer: [1, 4]
  },
  {
    question:
      'A company runs a containerized application on a Kubernetes cluster in an on-premises data center. The company is using a MongoDB database for data storage. The company wants to migrate some of these environments to AWS, but no code changes or deployment method changes are possible at this time. The company needs a solution that minimizes operational overhead. Which solution meets these requirements?',
    answers: [
      'Use Amazon Elastic Container Service (Amazon ECS) with Amazon EC2 worker nodes for compute and MongoDB on EC2 for data storage.',
      'Use Amazon Elastic Container Service (Amazon ECS) with AWS Fargate for compute and Amazon DynamoDB for data storage',
      'Use Amazon Elastic Kubernetes Service (Amazon EKS) with Amazon EC2 worker nodes for compute and Amazon DynamoDB for data storage.',
      'Use Amazon Elastic Kubernetes Service (Amazon EKS) with AWS Fargate for compute and Amazon DocumentDB (with MongoDB compatibility) for data storage.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'A telemarketing company is designing its customer call center functionality on AWS. The company needs a solution that provides multiple speaker recognition and generates transcript files. The company wants to query the transcript files to analyze the business patterns. The transcript files must be stored for 7 years for auditing purposes. Which solution will meet these requirements?',
    answers: [
      'Use Amazon Rekognition for multiple speaker recognition. Store the transcript files in Amazon S3. Use machine learning models for transcript file analysis.',
      'Use Amazon Transcribe for multiple speaker recognition. Use Amazon Athena for transcript file analysis.',
      'Use Amazon Translate for multiple speaker recognition. Store the transcript files in Amazon Redshift. Use SQL queries for transcript file analysis.',
      'Use Amazon Rekognition for multiple speaker recognition. Store the transcript files in Amazon S3. Use Amazon Textract for transcript file analysis.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'A company hosts its application on AWS. The company uses Amazon Cognito to manage users. When users log in to the application, the application fetches required data from Amazon DynamoDB by using a REST API that is hosted in Amazon API Gateway. The company wants an AWS managed solution that will control access to the REST API to reduce development efforts. Which solution will meet these requirements with the LEAST operational overhead?',
    answers: [
      'Configure an AWS Lambda function to be an authorizer in API Gateway to validate which user made the request.',
      'For each user, create and assign an API key that must be sent with each request. Validate the key by using an AWS Lambda function.',
      'Send the user’s email address in the header with every request. Invoke an AWS Lambda function to validate that the user with that email address has proper access.',
      'Configure an Amazon Cognito user pool authorizer in API Gateway to allow Amazon Cognito to validate each request.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'A company is developing a marketing communications service that targets mobile app users. The company needs to send confirmation messages with Short Message Service (SMS) to its users. The users must be able to reply to the SMS messages. The company must store the responses for a year for analysis. What should a solutions architect do to meet these requirements?',
    answers: [
      'Create an Amazon Connect contact flow to send the SMS messages. Use AWS Lambda to process the responses.',
      'Build an Amazon Pinpoint journey. Configure Amazon Pinpoint to send events to an Amazon Kinesis data stream for analysis and archiving.',
      'Use Amazon Simple Queue Service (Amazon SQS) to distribute the SMS messages. Use AWS Lambda to process the responses.',
      'Create an Amazon Simple Notification Service (Amazon SNS) FIFO topic. Subscribe an Amazon Kinesis data stream to the SNS topic for analysis and archiving.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'A company is planning to move its data to an Amazon S3 bucket. The data must be encrypted when it is stored in the S3 bucket. Additionally, the encryption key must be automatically rotated every year. Which solution will meet these requirements with the LEAST operational overhead?',
    answers: [
      'Move the data to the S3 bucket. Use server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Use the built-in key rotation behavior of SSE-S3 encryption keys.',
      'Create an AWS Key Management Service (AWS KMS) customer managed key. Enable automatic key rotation. Set the S3 bucket’s default encryption behavior to use the customer managed KMS key. Move the data to the S3 bucket.',
      'Create an AWS Key Management Service (AWS KMS) customer managed key. Set the S3 bucket’s default encryption behavior to use the customer managed KMS key. Move the data to the S3 bucket. Manually rotate the KMS key every year.',
      'Encrypt the data with customer key material before moving the data to the S3 bucket. Create an AWS Key Management Service (AWS KMS) key without key material. Import the customer key material into the KMS key. Enable automatic key rotation.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'The customers of a finance company request appointments with financial advisors by sending text messages. A web application that runs on Amazon EC2 instances accepts the appointment requests. The text messages are published to an Amazon Simple Queue Service (Amazon SQS) queue through the web application. Another application that runs on EC2 instances then sends meeting invitations and meeting confirmation email messages to the customers. After successful scheduling, this application stores the meeting information in an Amazon DynamoDB database. As the company expands, customers report that their meeting invitations are taking longer to arrive. What should a solutions architect recommend to resolve this issue?',
    answers: [
      'Add a DynamoDB Accelerator (DAX) cluster in front of the DynamoDB database.',
      'Add an Amazon API Gateway API in front of the web application that accepts the appointment requests.',
      'Add an Amazon CloudFront distribution. Set the origin as the web application that accepts the appointment requests.',
      'Add an Auto Scaling group for the application that sends meeting invitations. Configure the Auto Scaling group to scale based on the depth of the SQS queue.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'An online retail company has more than 50 million active customers and receives more than 25,000 orders each day. The company collects purchase data for customers and stores this data in Amazon S3. Additional customer data is stored in Amazon RDS. The company wants to make all the data available to various teams so that the teams can perform analytics. The solution must provide the ability to manage fine-grained permissions for the data and must minimize operational overhead. Which solution will meet these requirements?',
    answers: [
      'Migrate the purchase data to write directly to Amazon RDS. Use RDS access controls to limit access.',
      'Schedule an AWS Lambda function to periodically copy data from Amazon RDS to Amazon S3. Create an AWS Glue crawler. Use Amazon Athena to query the data. Use S3 policies to limit access.',
      'Create a data lake by using AWS Lake Formation. Create an AWS Glue JDBC connection to Amazon RDS. Register the S3 bucket in Lake Formation. Use Lake Formation access controls to limit access.',
      'Create an Amazon Redshift cluster. Schedule an AWS Lambda function to periodically copy data from Amazon S3 and Amazon RDS to Amazon Redshift. Use Amazon Redshift access controls to limit access.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'A company hosts a marketing website in an on-premises data center. The website consists of static documents and runs on a single server. An administrator updates the website content infrequently and uses an SFTP client to upload new documents. The company decides to host its website on AWS and to use Amazon CloudFront. The company’s solutions architect creates a CloudFront distribution. The solutions architect must design the most cost-effective and resilient architecture for website hosting to serve as the CloudFront origin. Which solution will meet these requirements?',
    answers: [
      'Create a virtual server by using Amazon Lightsail. Configure the web server in the Lightsail instance. Upload website content by using an SFTP client.',
      'Create an AWS Auto Scaling group for Amazon EC2 instances. Use an Application Load Balancer. Upload website content by using an SFTP client.',
      'Create a private Amazon S3 bucket. Use an S3 bucket policy to allow access from a CloudFront origin access identity (OAI). Upload website content by using the AWS CLI.',
      'Create a public Amazon S3 bucket. Configure AWS Transfer for SFTP. Configure the S3 bucket for website hosting. Upload website content by using the SFTP client.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'A company wants to manage Amazon Machine Images (AMIs). The company currently copies AMIs to the same AWS Region where the AMIs were created. The company needs to design an application that captures AWS API calls and sends alerts whenever the Amazon EC2 CreateImage API operation is called within the company’s account. Which solution will meet these requirements with the LEAST operational overhead?',
    answers: [
      'Create an AWS Lambda function to query AWS CloudTrail logs and to send an alert when a CreateImage API call is detected.',
      'Configure AWS CloudTrail with an Amazon Simple Notification Service (Amazon SNS) notification that occurs when updated logs are sent to Amazon S3. Use Amazon Athena to create a new table and to query on CreateImage when an API call is detected.',
      'Create an Amazon EventBridge (Amazon CloudWatch Events) rule for the CreateImage API call. Configure the target as an Amazon Simple Notification Service (Amazon SNS) topic to send an alert when a CreateImage API call is detected.',
      'Configure an Amazon Simple Queue Service (Amazon SQS) FIFO queue as a target for AWS CloudTrail logs. Create an AWS Lambda function to send an alert to an Amazon Simple Notification Service (Amazon SNS) topic when a CreateImage API call is detected.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'A company owns an asynchronous API that is used to ingest user requests and, based on the request type, dispatch requests to the appropriate microservice for processing. The company is using Amazon API Gateway to deploy the API front end, and an AWS Lambda function that invokes Amazon DynamoDB to store user requests before dispatching them to the processing microservices. The company provisioned as much DynamoDB throughput as its budget allows, but the company is still experiencing availability issues and is losing user requests. What should a solutions architect do to address this issue without impacting existing users?',
    answers: [
      'Add throttling on the API Gateway with server-side throttling limits.',
      'Use DynamoDB Accelerator (DAX) and Lambda to buffer writes to DynamoDB.',
      'Create a secondary index in DynamoDB for the table with the user requests.',
      'Use the Amazon Simple Queue Service (Amazon SQS) queue and Lambda to buffer writes to DynamoDB.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'A company needs to move data from an Amazon EC2 instance to an Amazon S3 bucket. The company must ensure that no API calls and no data are routed through public internet routes. Only the EC2 instance can have access to upload data to the S3 bucket. Which solution will meet these requirements?',
    answers: [
      'Create an interface VPC endpoint for Amazon S3 in the subnet where the EC2 instance is located. Attach a resource policy to the S3 bucket to only allow the EC2 instance’s IAM role for access.',
      'Create a gateway VPC endpoint for Amazon S3 in the Availability Zone where the EC2 instance is located. Attach appropriate security groups to the endpoint. Attach a resource policy to the S3 bucket to only allow the EC2 instance’s IAM role for access.',
      'Run the nslookup tool from inside the EC2 instance to obtain the private IP address of the S3 bucket’s service API endpoint. Create a route in the VPC route table to provide the EC2 instance with access to the S3 bucket. Attach a resource policy to the S3 bucket to only allow the EC2 instance’s IAM role for access.',
      'Use the AWS provided, publicly available ip-ranges.json file to obtain the private IP address of the S3 bucket’s service API endpoint. Create a route in the VPC route table to provide the EC2 instance with access to the S3 bucket. Attach a resource policy to the S3 bucket to only allow the EC2 instance’s IAM role for access.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'A solutions architect is designing the architecture of a new application being deployed to the AWS Cloud. The application will run on Amazon EC2 On-Demand Instances and will automatically scale across multiple Availability Zones. The EC2 instances will scale up and down frequently throughout the day. An Application Load Balancer (ALB) will handle the load distribution. The architecture needs to support distributed session data management. The company is willing to make changes to code if needed. What should the solutions architect do to ensure that the architecture supports distributed session data management?',
    answers: [
      'Use Amazon ElastiCache to manage and store session data.',
      'Use session affinity (sticky sessions) of the ALB to manage session data.',
      'Use Session Manager from AWS Systems Manager to manage the session.',
      'Use the GetSessionToken API operation in AWS Security Token Service (AWS STS) to manage the session.'
    ],
    correctAnswer: [0]
  },
  {
    question:
      'A company offers a food delivery service that is growing rapidly. Because of the growth, the company’s order processing system is experiencing scaling problems during peak traffic hours. The current architecture includes the following: • A group of Amazon EC2 instances that run in an Amazon EC2 Auto Scaling group to collect orders from the application • Another group of EC2 instances that run in an Amazon EC2 Auto Scaling group to fulfill orders The order collection process occurs quickly, but the order fulfillment process can take longer. Data must not be lost because of a scaling event. A solutions architect must ensure that the order collection process and the order fulfillment process can both scale properly during peak traffic hours. The solution must optimize utilization of the company’s AWS resources. Which solution meets these requirements?',
    answers: [
      'Use Amazon CloudWatch metrics to monitor the CPU of each instance in the Auto Scaling groups. Configure each Auto Scaling group’s minimum capacity according to peak workload values.',
      'Use Amazon CloudWatch metrics to monitor the CPU of each instance in the Auto Scaling groups. Configure a CloudWatch alarm to invoke an Amazon Simple Notification Service (Amazon SNS) topic that creates additional Auto Scaling groups on demand.',
      'Provision two Amazon Simple Queue Service (Amazon SQS) queues: one for order collection and another for order fulfillment. Configure the EC2 instances to poll their respective queue. Scale the Auto Scaling groups based on notifications that the queues send.',
      'Provision two Amazon Simple Queue Service (Amazon SQS) queues: one for order collection and another for order fulfillment. Configure the EC2 instances to poll their respective queue. Create a metric based on a backlog per instance calculation. Scale the Auto Scaling groups based on this metric.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'A company hosts multiple production applications. One of the applications consists of resources from Amazon EC2, AWS Lambda, Amazon RDS, Amazon Simple Notification Service (Amazon SNS), and Amazon Simple Queue Service (Amazon SQS) across multiple AWS Regions. All company resources are tagged with a tag name of “application” and a value that corresponds to each application. A solutions architect must provide the quickest solution for identifying all of the tagged components. Which solution meets these requirements?',
    answers: [
      'Use AWS CloudTrail to generate a list of resources with the application tag.',
      'Use the AWS CLI to query each service across all Regions to report the tagged components.',
      'Run a query in Amazon CloudWatch Logs Insights to report on the components with the application tag.',
      'Run a query with the AWS Resource Groups Tag Editor to report on the resources globally with the application tag.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'A company needs to export its database once a day to Amazon S3 for other teams to access. The exported object size varies between 2 GB and 5 GB. The S3 access pattern for the data is variable and changes rapidly. The data must be immediately available and must remain accessible for up to 3 months. The company needs the most cost-effective solution that will not increase retrieval time. Which S3 storage class should the company use to meet these requirements?',
    answers: [
      'S3 Intelligent-Tiering',
      'S3 Glacier Instant Retrieval',
      'S3 Standard',
      'S3 Standard-Infrequent Access (S3 Standard-IA)'
    ],
    correctAnswer: [0]
  },
  {
    question:
      'A company is developing a new mobile app. The company must implement proper traffic filtering to protect its Application Load Balancer (ALB) against common application-level attacks, such as cross-site scripting or SQL injection. The company has minimal infrastructure and operational staff. The company needs to reduce its share of the responsibility in managing, updating, and securing servers for its AWS environment. What should a solutions architect recommend to meet these requirements?',
    answers: [
      'Configure AWS WAF rules and associate them with the ALB.',
      'Deploy the application using Amazon S3 with public hosting enabled.',
      'Deploy AWS Shield Advanced and add the ALB as a protected resource.',
      'Create a new ALB that directs traffic to an Amazon EC2 instance running a third-party firewall, which then passes the traffic to the current ALB.'
    ],
    correctAnswer: [0]
  },
  {
    question:
      'A company’s reporting system delivers hundreds of .csv files to an Amazon S3 bucket each day. The company must convert these files to Apache Parquet format and must store the files in a transformed data bucket. Which solution will meet these requirements with the LEAST development effort?',
    answers: [
      'Create an Amazon EMR cluster with Apache Spark installed. Write a Spark application to transform the data. Use EMR File System (EMRFS) to write files to the transformed data bucket.',
      'Create an AWS Glue crawler to discover the data. Create an AWS Glue extract, transform, and load (ETL) job to transform the data. Specify the transformed data bucket in the output step.',
      'Use AWS Batch to create a job definition with Bash syntax to transform the data and output the data to the transformed data bucket. Use the job definition to submit a job. Specify an array job as the job type.',
      'Create an AWS Lambda function to transform the data and output the data to the transformed data bucket. Configure an event notification for the S3 bucket. Specify the Lambda function as the destination for the event notification.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'A company has 700 TB of backup data stored in network attached storage (NAS) in its data center. This backup data need to be accessible for infrequent regulatory requests and must be retained 7 years. The company has decided to migrate this backup data from its data center to AWS. The migration must be complete within 1 month. The company has 500 Mbps of dedicated bandwidth on its public internet connection available for data transfer. What should a solutions architect do to migrate and store the data at the LOWEST cost?',
    answers: [
      'Order AWS Snowball devices to transfer the data. Use a lifecycle policy to transition the files to Amazon S3 Glacier Deep Archive.',
      'Deploy a VPN connection between the data center and Amazon VPC. Use the AWS CLI to copy the data from on premises to Amazon S3 Glacier.',
      'Provision a 500 Mbps AWS Direct Connect connection and transfer the data to Amazon S3. Use a lifecycle policy to transition the files to Amazon S3 Glacier Deep Archive.',
      'Use AWS DataSync to transfer the data and deploy a DataSync agent on premises. Use the DataSync task to copy files from the on-premises NAS storage to Amazon S3 Glacier.'
    ],
    correctAnswer: [0]
  },
  {
    question:
      'A company has a serverless website with millions of objects in an Amazon S3 bucket. The company uses the S3 bucket as the origin for an Amazon CloudFront distribution. The company did not set encryption on the S3 bucket before the objects were loaded. A solutions architect needs to enable encryption for all existing objects and for all objects that are added to the S3 bucket in the future. Which solution will meet these requirements with the LEAST amount of effort?',
    answers: [
      'Create a new S3 bucket. Turn on the default encryption settings for the new S3 bucket. Download all existing objects to temporary local storage. Upload the objects to the new S3 bucket.',
      'Turn on the default encryption settings for the S3 bucket. Use the S3 Inventory feature to create a .csv file that lists the unencrypted objects. Run an S3 Batch Operations job that uses the copy command to encrypt those objects.',
      'Create a new encryption key by using AWS Key Management Service (AWS KMS). Change the settings on the S3 bucket to use server-side encryption with AWS KMS managed encryption keys (SSE-KMS). Turn on versioning for the S3 bucket.',
      'Navigate to Amazon S3 in the AWS Management Console. Browse the S3 bucket’s objects. Sort by the encryption field. Select each unencrypted object. Use the Modify button to apply default encryption settings to every unencrypted object in the S3 bucket.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'A company runs a global web application on Amazon EC2 instances behind an Application Load Balancer. The application stores data in Amazon Aurora. The company needs to create a disaster recovery solution and can tolerate up to 30 minutes of downtime and potential data loss. The solution does not need to handle the load when the primary infrastructure is healthy. What should a solutions architect do to meet these requirements?',
    answers: [
      'Deploy the application with the required infrastructure elements in place. Use Amazon Route 53 to configure active-passive failover. Create an Aurora Replica in a second AWS Region.',
      'Host a scaled-down deployment of the application in a second AWS Region. Use Amazon Route 53 to configure active-active failover. Create an Aurora Replica in the second Region.',
      'Replicate the primary infrastructure in a second AWS Region. Use Amazon Route 53 to configure active-active failover. Create an Aurora database that is restored from the latest snapshot.',
      'Back up data with AWS Backup. Use the backup to create the required infrastructure in a second AWS Region. Use Amazon Route 53 to configure active-passive failover. Create an Aurora second primary instance in the second Region.'
    ],
    correctAnswer: [0]
  },
  {
    question:
      'A company has a web server running on an Amazon EC2 instance in a public subnet with an Elastic IP address. The default security group is assigned to the EC2 instance. The default network ACL has been modified to block all traffic. A solutions architect needs to make the web server accessible from everywhere on port 443. Which combination of steps will accomplish this task? (Choose two.)',
    answers: [
      'Create a security group with a rule to allow TCP port 443 from source 0.0.0.0/0.',
      'Create a security group with a rule to allow TCP port 443 to destination 0.0.0.0/0.',
      'Update the network ACL to allow TCP port 443 from source 0.0.0.0/0.',
      'Update the network ACL to allow inbound/outbound TCP port 443 from source 0.0.0.0/0 and to destination 0.0.0.0/0.',
      'Update the network ACL to allow inbound TCP port 443 from source 0.0.0.0/0 and outbound TCP port 32768-65535 to destination 0.0.0.0/0.'
    ],
    correctAnswer: [0, 4]
  },
  {
    question:
      'A company’s application is having performance issues. The application is stateful and needs to complete in-memory tasks on Amazon EC2 instances. The company used AWS CloudFormation to deploy infrastructure and used the M5 EC2 instance family. As traffic increased, the application performance degraded. Users are reporting delays when the users attempt to access the application. Which solution will resolve these issues in the MOST operationally efficient way?',
    answers: [
      'Replace the EC2 instances with T3 EC2 instances that run in an Auto Scaling group. Make the changes by using the AWS Management Console.',
      'Modify the CloudFormation templates to run the EC2 instances in an Auto Scaling group. Increase the desired capacity and the maximum capacity of the Auto Scaling group manually when an increase is necessary.',
      'Modify the CloudFormation templates. Replace the EC2 instances with R5 EC2 instances. Use Amazon CloudWatch built-in EC2 memory metrics to track the application performance for future capacity planning.',
      'Modify the CloudFormation templates. Replace the EC2 instances with R5 EC2 instances. Deploy the Amazon CloudWatch agent on the EC2 instances to generate custom application latency metrics for future capacity planning.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'A solutions architect is designing a new API using Amazon API Gateway that will receive requests from users. The volume of requests is highly variable; several hours can pass without receiving a single request. The data processing will take place asynchronously, but should be completed within a few seconds after a request is made. Which compute service should the solutions architect have the API invoke to deliver the requirements at the lowest cost?',
    answers: [
      'An AWS Glue job',
      'An AWS Lambda function',
      'A containerized service hosted in Amazon Elastic Kubernetes Service (Amazon EKS)',
      'A containerized service hosted in Amazon ECS with Amazon EC2'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'You have created a VPC using the VPC Wizard with the CIDR block 100.0.0.0/16. You have selected a private subnet and VPN connection using the VPC Wizard. You have launched an EC2 instance in the private subnet. Now you need to connect to the EC2 instance via SSH. What do you need to do in order to connect to the EC2 instance?',
    answers: [
      'Allow inbound traffic on ports 80 and 22 to the private subnet.',
      'Connect to the instance on the private subnet using a NAT instance.',
      'Allow inbound traffic on port 22 on your network.',
      'Create a public subnet and from there connect to the EC2 instance.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'A company wants to move its Windows file shares to Amazon FSx for Windows File Server. The shares use Active Directory groups to control access. The company wants to restrict access to shares, folders, and files in FSx using the existing Active Directory groups after moving to AWS. Which solution will meet these requirements?',
    answers: [
      'Create an IAM service-linked role for the FSx file system.',
      'Create an Active Directory Connector to connect the on-premises Active Directory to AWS.',
      'Join the FSx file system to the on-premises Active Directory.',
      'Assign a tag to the FSx file system and map Active Directory groups to IAM groups.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'An application is running on an Amazon EC2 instance in VPC-A. The application needs to access files on another EC2 instance in VPC-B. VPC-A and VPC-B are in separate AWS accounts. What is the best solution to allow the EC2 instance in VPC-A to securely access the EC2 instance in VPC-B? The solution should not have a single point of failure or bandwidth bottlenecks.',
    answers: [
      'Set up VPC gateway endpoints for the EC2 instance in VPC-B.',
      'Create a private virtual interface for the EC2 instance in VPC-B and add routes from VPC-A.',
      'Set up a VPC peering connection between VPC-A and VPC-B.',
      'Attach a virtual private gateway to VPC-B and configure routing from VPC-A.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'An application is running on an Amazon EC2 instance with an Elastic IP address in VPC A. The application needs access to a database in VPC B. Both VPCs are in the same AWS account. What is the most secure solution to provide the required access?',
    answers: [
      'Create a DB instance security group that allows all traffic from the public IP address of the application server in VPC A.',
      'Configure a VPC peering connection between VPC A and VPC B.',
      'Launch an EC2 instance with an Elastic IP address into VPC B and proxy all requests through it.',
      'Make the DB instance publicly accessible and assign it a public IP address.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'You want to deploy an application in AWS. The application comes with an Oracle Database that needs to be installed in a separate server. The application requires that certain files be installed on the database server. You are also looking for faster performance for the database. What solution would you choose to deploy the database?',
    answers: [
      'Amazon EC2 with magnetic EBS volumes',
      'Migrate the Oracle Database to DynamoDB',
      'Amazon RDS for Oracle',
      'Amazon EC2 with SSD-based EBS volume'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'You are a solutions architect working for a busy media company with offices in Japan and the United States. Your production environment is hosted in both US-EAST-1 and AP-NORTHEAST-1. Your European users have been connecting to the production environment in Japan and are seeing the site in Japanese rather than in English. You need to ensure that they view the English language version. Which of the following routing policies could help you achieve this?',
    answers: [
      'Simple Routing',
      'Geolocation',
      'Weighted Routing',
      'Failover Routing',
      'Latency-Based Routing'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'A company stores application log files on Amazon Linux servers. The company must keep the log files for 7 years. The log files are analyzed together by a tool. What is the most cost effective Amazon storage service for the log files?',
    answers: [
      'Amazon Elastic Block Store (EBS)',
      'Amazon Elastic File System (EFS)',
      'Amazon EC2 instance storage',
      'Amazon S3'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'You have a VPC with public, private, and database subnets across two Availability Zones. The EC2 instances in the private subnets need to access the RDS databases in the database subnets. What should you do to allow the EC2 instances in the private subnets to access the RDS databases in the database subnets?',
    answers: [
      'Create a security group for the database subnets that allows inbound traffic from the security group for the private subnets.',
      'Create a route table for the database subnets that does not include routes to the public subnets.',
      'Create a security group for the database subnets that denies inbound traffic from the security group for the public subnets.',
      'Create a peering connection between the public and private subnets, and another between the private and database subnets.'
    ],
    correctAnswer: [0]
  },
  {
    question:
      'You are running your website behind a fleet of EC2 servers. You have designed your architecture to leverage multiple AZs, and thus your fleet of EC2 servers is hosted across different AZs. You are using EFS to provide file system access to the EC2 servers and to store all the data. You have integrated Application Load Balancer with EC2 instances, and whenever someone logs into your website, the ALB redirects the traffic to one of the EC2 servers. You deliver a lot of photos and videos via your website, and each time a user requests a photo or video, it is served via the EC2 instance. You are thinking of providing a faster turnaround time to end users and want to improve their user experience. How can you improve the existing architecture?',
    answers: [
      'Add more EC2 instances to the fleet.',
      'Use a CloudFront distribution to cache all the photos and videos.',
      'Move all the photos and videos to Amazon S3.',
      'Move all the photos and videos to Amazon Glacier.'
    ],
    correctAnswer: [1]
  },
  {
    question: 'How long can a message be retained in an SQS queue?',
    answers: ['1 day', '10 days', '14 days', '7 days'],
    correctAnswer: [2]
  },
  {
    question:
      'A company uses many Amazon EC2 instances to run an application. The application reads and writes data to an Amazon DynamoDB table. The size of the DynamoDB table keeps growing. But the application only needs data from the last 30 days. What is the most cost-effective solution with the least effort to meet these needs?',
    answers: [
      'Use a monitoring tool to delete old data.',
      'Configure DynamoDB TTL to expire old data.',
      'Redeploy the entire system every 30 days.',
      'Use DynamoDB Streams to delete old data.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'A company uses a web application to provide training to employees. The application is used for 12 hours daily. The company uses an Amazon RDS MySQL database to store data. What can be done to minimize costs?',
    answers: [
      'Configure automatic start and stop for the RDS DB instance.',
      'Launch an EC2 instance to start and stop RDS on a schedule.',
      'Use Amazon ElastiCache Redis to cache data when RDS is stopped.',
      'Use Lambda functions triggered by EventBridge to start and stop RDS.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'A company launched Linux servers in a private subnet in AWS. They also launched a Linux bastion host in a public subnet. An architect needs to connect from the company network to the bastion host and application servers. The security groups must allow this access. What two things should the architect do?',
    answers: [
      "Update the bastion host security group to allow access from the company's external IP range.",
      "Update the bastion host security group to allow access from the company's internal IP range.",
      'Update the application servers security group to allow SSH access from the bastion host public IP.',
      'Update the application servers security group to allow SSH access from the bastion host private IP.'
    ],
    correctAnswer: [1, 3]
  },
  {
    question:
      'A company has a website hosted on AWS behind a load balancer. The load balancer handles HTTP and HTTPS requests separately. The company wants all requests to use HTTPS. What should be done to meet this requirement?',
    answers: [
      'Create a listener rule to redirect HTTP requests to HTTPS.',
      'Update the network ACL of the load balancer to accept only HTTPS traffic.',
      'Create a rule to replace HTTP with HTTPS in the URL.',
      'Replace the load balancer with one that uses Server Name Indication for HTTPS.'
    ],
    correctAnswer: [0]
  },
  {
    question:
      'A company wants to move its MySQL database from their own computers to AWS. The company had a database failure before that hurt their business significantly. To prevent this from happening again, the company wants a reliable database on AWS that loses minimal data. The database should save every transaction on at least two computers. How can they achieve this?',
    answers: [
      'Make an Amazon RDS MySQL DB instance with Multi-AZ enabled to copy the data synchronously.',
      'Make an Amazon RDS DB instance that copies data to three availability zones synchronously.',
      'Use Amazon S3 to store the MySQL database files, enabling versioning for redundancy.',
      'Deploy the MySQL database on a single EC2 instance with EBS volumes and enable EBS snapshots for backup.'
    ],
    correctAnswer: [0]
  },
  {
    question:
      'A company has multiple web servers that frequently need to access a common MySQL database hosted on Amazon RDS. The company wants a secure way for the web servers to connect to the database while regularly changing the user credentials. What is the best solution?',
    answers: [
      'Store the credentials in AWS Systems Manager OpsCenter. Give the web servers permission to access OpsCenter.',
      'Store the credentials in an Amazon S3 bucket. Give the web servers permission to retrieve the credentials and access the database.',
      'Store the database credentials in AWS Secrets Manager. Give the web servers permission to access Secrets Manager.',
      'Store encrypted credentials on each web server using AWS KMS. Let each web server decrypt and access the database.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'A company exports a database to Amazon S3 each day. The database size is 2-5 GB. The S3 data access changes a lot and must be available immediately for 3 months. What is the most cost-effective S3 storage class meeting these needs without increasing retrieval time?',
    answers: [
      'S3 Intelligent-Tiering',
      'S3 Glacier Instant Retrieval',
      'S3 Standard-Infrequent Access (S3 Standard-IA)',
      'S3 Standard'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'A company stores log data in Amazon S3 buckets. The data must be encrypted while it is uploaded and stored. What should the solutions architect do to meet these requirements?',
    answers: [
      'Use client-side encryption to encrypt the data before uploading it to S3.',
      'Enable encryption on the S3 buckets using AWS KMS keys.',
      'Use server-side encryption to encrypt the data when uploading it to S3.',
      'Create S3 bucket policies to enforce server-side encryption with S3 keys.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      "When you define a CIDR block with a IP address range, you can't use all the IP addresses. AWS reserves a few IP addresses for its own networking purpose. How many IP addresses does AWS reserve?",
    answers: ['2', '3', '5', '4'],
    correctAnswer: [2]
  },
  {
    question:
      'An application runs on an Amazon EC2 instance inside a VPC. The application processes logs stored in an Amazon S3 bucket. The EC2 instance needs to access the S3 bucket without internet connectivity. What should be done to provide private network connectivity from the EC2 instance to the S3 bucket?',
    answers: [
      'Create a gateway VPC endpoint to the S3 bucket.',
      'Create an Amazon API Gateway API with a private link to the S3 endpoint.',
      'Stream the logs to Amazon CloudWatch Logs and export them to the S3 bucket.',
      'Create an instance profile on Amazon EC2 to allow S3 access.'
    ],
    correctAnswer: [0]
  },
  {
    question:
      'A company runs a website on Amazon EC2 instances. Users upload images to the website. The website resizes images before storing them in Amazon S3. Users experience slow image uploads. The company wants to improve website performance and reduce coupling in the application. What two things should the solutions architect do to meet these requirements?',
    answers: [
      'Schedule AWS Lambda functions using EventBridge to periodically resize uploaded images.',
      "Configure the application to upload original images directly from the user's browser to Amazon S3 using pre-signed URLs.",
      'Use AWS Lambda functions triggered by S3 events to resize images after upload.',
      'Configure the web server to upload resized images to Amazon S3.'
    ],
    correctAnswer: [1, 2]
  },
  {
    question:
      "A company has a dynamic web application running on two Amazon EC2 instances. The application uses the company's own SSL certificate on each instance for SSL encryption and decryption. There has been an increase in traffic to the application recently. The operations team found that the SSL encryption and decryption is using up the maximum compute capacity of the web servers. What should be done to increase the application's performance?",
    answers: [
      'Create another EC2 instance as a proxy server. Migrate the SSL certificate to the new instance and configure it to direct connections to the existing instances.',
      'Import the SSL certificate into AWS Certificate Manager (ACM). Create an Application Load Balancer with an HTTPS listener that uses the ACM SSL certificate.',
      'Create a new SSL certificate using AWS Certificate Manager (ACM) and install it on each EC2 instance.',
      'Create an Amazon S3 bucket, migrate the SSL certificate to it, and configure the EC2 instances to reference the bucket for SSL termination.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'An application uses Amazon EC2 instances in multiple Availability Zones behind an Application Load Balancer. The application works best when the CPU use of the EC2 instances is around 40%. What should be done to maintain the desired performance across all instances?',
    answers: [
      'Use a target tracking policy to dynamically adjust the number of instances.',
      'Schedule scaling actions to increase and decrease the number of instances.',
      'Use a simple scaling policy to dynamically adjust the number of instances.',
      'Use an AWS Lambda function to update the number of instances.'
    ],
    correctAnswer: [0]
  },
  {
    question:
      "You have developed an application that runs on EC2 servers. The application needs to run 24/7 throughout the year. The application is critical for business, so the performance can't go down. At the same time, you are looking at the best possible way to optimize your costs. What should be your approach?",
    answers: [
      'Use a spot instance to get the maximum pricing advantage.',
      'Use EC2 via On Demand and shut down the EC2 instance during the night when no one is using it.',
      'Use a reserved instance for one year.',
      'Use EC2 via On Demand and shut down the EC2 instance during the weekends.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'A solutions architect created a new AWS account. They must secure access to the AWS account root user. What two actions will accomplish this?',
    answers: [
      'Enable multi-factor authentication for the root user.',
      'Add the root user to a group with admin permissions.',
      'Use a strong password for the root user.',
      'Store root user access keys in an encrypted Amazon S3 bucket.'
    ],
    correctAnswer: [0, 2]
  },
  {
    question:
      'You are developing an application and have associated an Elastic IP (EIP) with the application tier that is an EC2 instance. Since you are in the development cycle, you have to frequently stop and start the application server. What is going to happen to the EIP when you start/stop the application server?',
    answers: [
      'After shutdown of the EC2 instance, the EIP is released from your account and you have to request it again before you can use it.',
      'Every time the EC2 instance is stopped, the EIP is disassociated, and you must manually attach it whenever the instance is started again.',
      'Every time the EC2 instance is stopped, the EIP is disassociated and a new EIP is associated when you start the instance.',
      'Even after the shutdown, the EIP remains associated with the instance, so no action needed.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'A company needs to check its AWS Cloud setup. The company wants to make sure no one makes unauthorized changes to its Amazon S3 buckets. What should a solutions architect do to meet this goal?',
    answers: [
      'Turn on Amazon Inspector with the right assessment template.',
      'Turn on AWS Config with the right rules.',
      'Turn on AWS Trusted Advisor with the right checks.',
      'Turn on Amazon S3 server access logging. Set up Amazon EventBridge (Amazon CloudWatch Events).'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'A company moved its data warehouse to AWS and has a Direct Connect link. Office users query the data warehouse and get 50MB results. Webpages are 500KB. Result sets are not cached. Which option gives the lowest data transfer cost from AWS?',
    answers: [
      'Host the visualization tool on-premises and query the warehouse over the internet.',
      'Host the tool on-premises and query over Direct Connect in the same Region.',
      'Host the tool in the same Region and access over Direct Connect in the same Region.',
      'Host the visualization tool in the same Region as the warehouse and access over the internet.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'A company wants to provide fast download speeds for its historical performance reports globally. It needs a cost-effective solution that provisions infrastructure on-demand and scales automatically based on usage. Which AWS services should be used?',
    answers: [
      'Application Load Balancer with Amazon EC2 Auto Scaling',
      'AWS Lambda and Amazon DynamoDB',
      'Amazon CloudFront and Amazon S3',
      'Amazon Route 53 with internal Application Load Balancers'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'A company is launching a new application on AWS. The application uses a load balancer to direct traffic to Amazon EC2 instances. The EC2 instances are in an Auto Scaling group. The company needs separate development and production environments. The production environment will have periods of high traffic. What is the most cost-effective way to configure the development environment?',
    answers: [
      'Use smaller EC2 instances in both environments.',
      'Have only one EC2 instance as a target in the development environment.',
      'Change the load balancer algorithm to least outstanding requests.',
      'Reduce the maximum number of EC2 instances allowed in the development Auto Scaling group.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'A company has two applications. One application sends messages with data to process. The other application receives and processes the messages. The company wants to use an AWS service for sending messages between the applications. The sender application can send about 1000 messages per hour. It can take up to 2 days to process the messages. If processing fails, the messages must be retained. This should not impact the processing of other messages. Which AWS service meets these requirements in the most efficient way?',
    answers: [
      'Use an Amazon Kinesis data stream to receive messages. Integrate the processor with the Kinesis Client Library.',
      'Set up an Amazon EC2 instance running Redis to store, process and delete messages.',
      'Subscribe the processor to an Amazon SNS topic. Integrate the sender to the SNS topic.',
      'Use an Amazon SQS queue. Configure a dead-letter queue to collect failed messages.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'Which of the following are valid Route 53 routing policies? (Choose three)',
    answers: ['Complex', 'Shortest First', 'Weighted', 'Latency', 'Simple'],
    correctAnswer: [2, 3, 4]
  },
  {
    question:
      'You are developing a small application through which users can register for events. As a part of the registration process, you want to send a one-time text message confirming registration. Your management wants to make sure you spend the least amount of money possible in this effort. Which AWS service should you be using to do this?',
    answers: [
      'Amazon SNS',
      'AWS STS',
      'Amazon SQS',
      'Use an EC2 instance and configure sending the text notification from there'
    ],
    correctAnswer: [0]
  },
  {
    question:
      "The company's Customer Experience manager comes to see you about some odd behavior with the ticketing system: messages presented to the support team are not arriving in the order in which they were generated. You know that this is due to the way the underlying SQS standard queue service is being used to manage messages. Which of the following are correct explanations? (Choose two)",
    answers: [
      'SQS uses multiple hosts, and each host holds only a portion of all the messages. When a staff member calls for their next message, the consumer process does not see all the hosts or all the messages. As such, messages are not necessarily delivered in the order in which they were generated.',
      'The support staff is probably using the provided admin tools to amend the priority in the SQS queue based on their experience and insights about the issues.',
      'As the SQS service gets busy, some of the hosts will automatically swap from FIFO to LIFO to provide a better work load balance and clearance rate.',
      'If an agent abandons a message or takes a break before finishing with a message, it will be offered in the queue again. In order to ensure that no message is lost, a message will persist in the SQS queue until it is processed successfully.',
      'SQS has been set up to prioritize messages in the queue based on keywords.'
    ],
    correctAnswer: [0, 3]
  },
  {
    question:
      'A company is using Amazon CloudFront to deliver content from its website. The company enabled logging on the CloudFront distribution. The logs are saved in an Amazon S3 bucket owned by the company. The company wants to perform advanced analysis on the logs and build visualizations. What should the solutions architect recommend to meet these requirements?',
    answers: [
      'Use standard SQL queries in Amazon Athena to analyze the CloudFront logs in the S3 bucket. Visualize the results with AWS Glue.',
      'Use standard SQL queries in Amazon DynamoDB to analyze the CloudFront logs in the S3 bucket. Visualize the results with Amazon QuickSight.',
      'Use standard SQL queries in Amazon Athena to analyze the CloudFront logs in the S3 bucket. Visualize the results with Amazon QuickSight.',
      'Use standard SQL queries in Amazon DynamoDB to analyze the CloudFront logs in the S3 bucket. Visualize the results with AWS Glue.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'A team receives files in an S3 bucket daily. The team manually copies files to another S3 bucket for analysis. More and larger files are now being sent. The team wants to automatically copy files and run code on them using Lambda when files arrive. They also want to send files to a SageMaker pipeline. What is the best way to meet these needs with the least overhead?',
    answers: [
      'Use Lambda to copy files and send S3 notifications to Lambda and SageMaker.',
      'Send S3 notifications to EventBridge and target Lambda and SageMaker.',
      'Use S3 replication and send S3 notifications to Lambda and SageMaker.',
      'Use S3 replication and send S3 notifications to EventBridge targeting Lambda and SageMaker.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'A large media company hosts a web application on AWS. The company wants to start storing confidential media files in caches so users around the world can reliably access the files. The content is stored in Amazon S3 buckets. How can the company deliver the content quickly to users globally?',
    answers: [
      'Use AWS DataSync to connect the S3 buckets to the web application.',
      'Deploy Amazon CloudFront to connect the S3 buckets to CloudFront edge servers.',
      'Deploy AWS Global Accelerator to connect the S3 buckets to the web application.',
      'Use Amazon Simple Queue Service (SQS) to connect the S3 buckets to the web application.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'A company uses AWS Organizations to manage accounts. The company wants to ensure future account notifications go to administrators, not root users. What should they do?',
    answers: [
      'Forward root user emails to all users.',
      'Configure account alternate contacts.',
      'Use same root user email for all accounts.',
      'Forward root user emails to one administrator.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      "A company is moving its database from its own computers to Amazon Aurora. The database on the company's own computers must stay available while it is moved to Amazon Aurora. The Amazon Aurora database must stay synchronized with the database on the company's own computers. What two steps can they do to achieve these goals?",
    answers: [
      'Create an ongoing replication process between the two databases.',
      "Make a backup copy of the database on the company's own computers.",
      'Perform a cut-over migration, shutting down the original database while transferring data to Amazon Aurora.',
      'Use Amazon S3 to store database snapshots, and update Amazon Aurora manually.'
    ],
    correctAnswer: [0, 1]
  },
  {
    question:
      'A company needs to store contract documents for 5 years. The documents cannot be overwritten or deleted during this time. The company wants to encrypt the documents and automatically rotate the encryption keys every year. Which two steps should be taken to meet these requirements with the least operational overhead?',
    answers: [
      'Store the documents in Amazon S3 using S3 Object Lock in governance mode.',
      'Store the documents in Amazon S3 using S3 Object Lock in compliance mode.',
      'Use server-side encryption with Amazon S3 managed encryption keys (SSE-S3) and configure key rotation.',
      'Use server-side encryption with AWS KMS customer managed keys and configure key rotation.'
    ],
    correctAnswer: [0, 1]
  },
  {
    question:
      'You just deployed a three-tier architecture in AWS. The web tier is in the public subnet and the application and database tiers are in the private subnet. You need to download some OS updates for the application. You want a permanent solution for doing this, and it should be highly available. What is the best way to achieve your goal?',
    answers: [
      'Use a NAT gateway.',
      'Use a VPC endpoint.',
      'Use an Internet gateway.',
      'Use a NAT instance.'
    ],
    correctAnswer: [0]
  },
  {
    question:
      'You are designing a storage solution for a publishing company. The publishing company stores a lot of documents in Microsoft Word and in PDF format. The solution you are designing should be able to provide document-sharing capabilities so that anyone who is authorized can access the files and use the versioning capability. This way, the application can maintain several versions of the same file at any point in time. Which AWS service meets this requirement?',
    answers: ['Amazon EBS', 'Amazon S3', 'Amazon RDS', 'Amazon EFS'],
    correctAnswer: [1]
  },
  {
    question:
      'An ecommerce company stores 300 MB of analytics data per month in JSON format in the AWS Cloud. The data must be accessible within milliseconds if needed, and retained for 30 days. What is the most cost-effective solution to back up this data?',
    answers: [
      'Amazon S3 Glacier',
      'Amazon RDS for PostgreSQL',
      'Amazon OpenSearch Service',
      'Amazon S3 Standard'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'A company implemented a self-managed DNS solution on 3 Amazon EC2 instances behind a Network Load Balancer in the us-west-2 Region. Most users are in the US and Europe. The company launched 3 EC2 instances in eu-west-1 and added them as targets to a new Network Load Balancer. What can the company use to route traffic to all EC2 instances?',
    answers: [
      'Create a Route 53 geolocation routing policy to route to one of the 2 Network Load Balancers. Use it as origin for a CloudFront distribution.',
      'Create a Global Accelerator standard accelerator. Create endpoint groups in us-west-2 and eu-west-1. Add the 2 Network Load Balancers as endpoints.',
      'Replace the 2 Network Load Balancers with 2 Application Load Balancers. Create a Route 53 latency routing policy to route to one. Use it as origin for a CloudFront distribution.',
      'Attach Elastic IPs to the 6 EC2 instances. Create a Route 53 geolocation routing policy to route to the instances. Use it as origin for a CloudFront distribution.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'A company needs a highly available database for a critical application running on Amazon EC2. The database should automatically failover if there is a disruption. What is the best solution to meet these requirements?',
    answers: [
      'Launch an EC2 instance in one Availability Zone. Install the database. Back up with an AMI. Use CloudFormation to recreate the instance if disrupted.',
      'Launch two EC2 instances in different Availability Zones in one Region. Install the database on both instances. Configure the instances as a cluster with database replication.',
      'Launch EC2 instances in two different Regions. Install the database in both Regions. Set up database replication. Fail over between Regions.',
      'Launch an EC2 instance in a single Availability Zone. Install the database and use EC2 Auto Scaling to automatically replace the instance if disrupted.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'A company needs to send text messages to its app users. The users must reply to the messages. The company wants to store the replies for one year. What should the company use to meet these needs?',
    answers: [
      'Use Amazon Connect to send the messages, and Lambda functions to process the replies.',
      'Use Amazon SNS to send the messages, and subscribe an Amazon Kinesis stream to store the replies.',
      'Build an Amazon Pinpoint journey to send the messages, and send reply events to a Kinesis stream.',
      'Use Amazon SQS to distribute the messages, and Lambda functions to process the replies.'
    ],
    correctAnswer: [0]
  },
  {
    question:
      'A company wants to move a Python application that processes JSON documents to AWS Cloud. The application runs thousands of times daily. The company needs a solution that is highly available, maximizes scalability, and minimizes overhead. What is the best solution?',
    answers: [
      'Send JSON to SQS queue, run Python in ECS cluster to process messages, save results to RDS DB instance.',
      'Store JSON in S3 bucket, run Python code on EC2 instances to process, save results to Aurora DB cluster.',
      'Store JSON on EBS volume, attach to EC2 instances to process, save results to RDS DB instance.',
      'Store JSON in S3 bucket, use Lambda function to run Python code when documents arrive, save results to Aurora DB cluster.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'A company needs a solution to record and analyze customer calls. The solution must recognize multiple speakers on calls and create text transcripts of the calls. The transcripts must be stored for 7 years. Which AWS service combination meets these needs?',
    answers: [
      'Use Amazon Comprehend for speaker recognition. Use Amazon Kinesis Data Firehose to create transcripts and store them in Amazon Elasticsearch for analysis.',
      'Use Amazon Rekognition for speaker recognition. Use Amazon Translate to create transcripts. Store transcripts in Amazon Redshift and analyze with SQL queries.',
      'Use Amazon Transcribe for speaker recognition and transcript creation. Store transcripts in Amazon S3 for long-term storage. Use Amazon Athena to analyze the transcripts.',
      'Use Amazon Rekognition for speaker recognition. Use Amazon Textract to analyze transcripts stored in Amazon S3.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'You are running a highly available application in AWS. The business indicates that it needs a very performant file system that can be shared across EC2 servers (web servers). Which AWS service can solve this problem?',
    answers: [
      'Amazon EFS',
      'Amazon S3',
      'Amazon EBS',
      'Amazon EC2 Instance Store'
    ],
    correctAnswer: [0]
  },
  {
    question:
      "When editing permissions (policies and ACLs), creating S3 buckets, and performing activities with EC2 instances, to whom does 'Owner' generally refer in the context of AWS?",
    answers: [
      'Owner is the IAM role used to create the object via the GUI, CLI, or API.',
      'Owner refers to the root account.',
      'Owner is the IAM user who created the object via the GUI, CLI, or API.',
      "There is no special concept of 'Owner' in AWS."
    ],
    correctAnswer: [1]
  },
  {
    question:
      'A company migrated a 3-tier application to Amazon VPC. The security team found the principle of least privilege was not followed for security group rules between application tiers. What should be done to fix this?',
    answers: [
      'Use security group IDs in security group rules.',
      'Use instance IDs in security group rules.',
      'Use subnet CIDR blocks in security group rules.',
      'Use VPC CIDR blocks in security group rules.'
    ],
    correctAnswer: [0]
  },
  {
    question:
      "A company's process for bringing in new data sometimes fails because of network connection issues. When this happens, the new data is not processed unless the company manually runs the process again. What should be done to make sure all data notifications are eventually processed?",
    answers: [
      'Implement a caching mechanism to store the data notifications temporarily.',
      'Deploy the processing function across multiple Availability Zones.',
      'Configure the retry settings to increase the number of retries and the wait time between retries.',
      'Increase the CPU and memory resources for the data processing function.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'A company has an application that runs on Amazon EC2 instances. The application reads data from an Amazon SQS queue and processes the messages in parallel. The message volume changes unpredictably and often has bursts of traffic. The application should process messages without downtime. What is the most cost-effective solution to meet these requirements?',
    answers: [
      'Use Spot Instances only to handle maximum capacity.',
      'Use Reserved Instances only to handle maximum capacity.',
      'Use Reserved Instances for baseline capacity and On-Demand Instances for additional capacity.',
      'Use Reserved Instances for baseline capacity and Spot Instances for additional capacity.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'A company is building a new web application that uses Amazon EC2 instances and an Amazon Aurora database. The application data must be encrypted when stored and while moving between services. What should the company do to meet these encryption requirements?',
    answers: [
      'Use BitLocker to encrypt data at rest and import encryption keys to AWS KMS to encrypt data in transit.',
      'Use the AWS root account to enable encryption for all data at rest and in transit.',
      'Use AWS Key Management Service (AWS KMS) to encrypt data at rest and AWS Certificate Manager (ACM) certificates to encrypt data in transit.',
      'Use AWS Certificate Manager (ACM) to encrypt data at rest and AWS KMS to encrypt data in transit.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'A company sells ringtones made from clips of popular songs. The ringtones files are stored in Amazon S3 Standard and are at least 128 KB in size. The company has millions of files, but downloads are rare for ringtones older than 90 days. The company wants to save money on storage while keeping the most accessed files available for users. What should the company do to meet these requirements in the most cost-effective way?',
    answers: [
      'Configure S3 Standard-Infrequent Access (S3 Standard-IA) as the initial storage tier for the objects.',
      'Implement an S3 lifecycle policy to move objects from S3 Standard to S3 Standard-Infrequent Access (S3 Standard-IA) after 90 days.',
      'Move the files to S3 Intelligent-Tiering and configure it to move objects to a cheaper tier after 90 days.',
      'Use S3 inventory to manage objects and move them to S3 Standard-Infrequent Access (S3 Standard-IA) after 90 days.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'A company stores confidential audit documents in an Amazon S3 bucket. The bucket uses policies to restrict access to authorized users. The company wants a more secure way to prevent accidental deletion of documents. What should be done?',
    answers: [
      'Enable versioning and MFA Delete on the S3 bucket.',
      'Enable MFA on the audit team IAM user accounts.',
      'Add a Lifecycle policy to deny delete access during audits.',
      'Encrypt the bucket with AWS KMS and restrict access to the key.'
    ],
    correctAnswer: [0]
  },
  {
    question:
      'A company needs to keep application log files for 10 years for a critical application. The application team needs to access logs from the past month often for troubleshooting. But they rarely need logs older than 1 month. The application creates more than 10 TB of logs every month.',
    answers: [
      'Store the logs in Amazon S3. Use S3 Lifecycle policies to move logs older than 1 month to S3 Glacier Deep Archive.',
      'Store the logs in Amazon CloudWatch Logs. Use AWS Backup to move logs older than 1 month to S3 Glacier Deep Archive.',
      'Store the logs in Amazon S3. Use AWS Backup to move logs older than 1 month to S3 Glacier.',
      'Store the logs in Amazon CloudWatch Logs. Use Amazon S3 Lifecycle policies to move logs older than 1 month to S3 Glacier Deep Archive.'
    ],
    correctAnswer: [0]
  },
  {
    question:
      'A bicycle company wants to track the location of its bikes during busy hours. It needs a system to store and access the location data through an API. What AWS service should the company use for this?',
    answers: [
      'Amazon API Gateway with AWS Lambda',
      'Amazon QuickSight with Amazon Redshift',
      'Amazon Athena with Amazon S3',
      'Amazon API Gateway with Amazon Kinesis Data Analytics'
    ],
    correctAnswer: [0]
  },
  {
    question:
      'You are a web developer and just want to focus on writing code. You want to quickly deploy and manage applications in the AWS Cloud without worrying about the infrastructure that runs those applications. At the same time, you are looking for optimal performance. Which service should you choose for this?',
    answers: [
      'Use AWS CloudFormation template.',
      'Create a few servers in EC2 and deploy your application in them.',
      'Use Elastic Beanstalk.',
      'Use Amazon S3.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'A company uses Amazon EC2 instances to process orders from clients. The EC2 instances store the orders in an Amazon RDS database. Sometimes the system fails and orders must be reprocessed. The company wants a solution to automatically process orders if an outage happens. What should be done?',
    answers: [
      'Move the EC2 instances into an Auto Scaling group. Use EventBridge to target an ECS task to process orders.',
      'Use Amazon SNS and Lambda. Send orders to an SNS topic. Have a Lambda function subscribed to the topic send orders to the EC2 instances.',
      'Move the EC2 instances into an Auto Scaling group behind a load balancer. Update the order system to send to the load balancer.',
      'Move the EC2 instances into an Auto Scaling group. Configure the order system to send orders to an Amazon SQS queue. Have the EC2 instances get orders from the queue.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'A solutions architect created two IAM policies: Policy1 and Policy2. Both policies are attached to an IAM group. A cloud engineer was added to the IAM group as an IAM user. Which action will the cloud engineer be able to perform?',
    answers: [
      'Deleting IAM users',
      'Deleting Amazon EC2 instances',
      'Deleting directories',
      'Deleting logs from Amazon CloudWatch Logs'
    ],
    correctAnswer: [1]
  },
  {
    question:
      "You are using the Virginia region as your primary data center for hosting AWS services. You don't use any other region as of now, but you want to keep yourself ready for any disaster. During any disaster, you should be able to deploy your infrastructure like your primary region in a matter of minutes. Which AWS service should you use?",
    answers: [
      'Amazon CloudWatch',
      'Amazon EC2 AMIs with EBS snapshots',
      'AWS CloudFormation',
      'Amazon Elastic Beanstalk'
    ],
    correctAnswer: [2]
  },
  {
    question:
      "Your company has just purchased another company. As part of the merger, your team has been instructed to cross-connect the corporate networks. You run all your confidential corporate services and internal DNS in a VPC. The merged company has all its confidential corporate services and internal DNS on the premises. After establishing a Direct-Connect service between your VPC and the other company's on-premises network and confirming all the routing, firewalls, and authentication, you find that although you can resolve names against the other company's DNS, the other company's services are unable to resolve names against your DNS servers. Why might this be?",
    answers: [
      'You cannot use DNS in this way. You need to merge the zones under a parent zone registered with ICANN.',
      'AWS Route 53 is an Internet service, and the other company needs to perform lookups and zone transfers via the Internet, not the Direct-Connect link.',
      'Route 53 is not an industry-standard DNS service, and zone transfers and name resolution must be done via a proprietary API.',
      'By design, AWS DNS does not respond to requests originating from outside the VPC.',
      'The computers are not configured properly. You need to add the IP address of the AWS DNS servers into the DNS options of the IP stack.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      "A company needs to move an application from their own data center to AWS Cloud. The application runs all the time. The application's database storage grows over time. What is the most cost effective way to meet these needs?",
    answers: [
      'Move the application to EC2 On-Demand Instances. Move the database to RDS Reserved Instances.',
      'Move the application to EC2 Spot Instances. Move the database to S3.',
      'Move the application to EC2 Reserved Instances. Move the database to Aurora Reserved Instances.',
      'Move the application to EC2 Reserved Instances. Move the database to RDS On-Demand Instances.'
    ],
    correctAnswer: [0]
  },
  {
    question:
      "A company hired an external vendor to do work in the company's AWS account. The vendor uses a tool hosted in the vendor's own AWS account. The vendor does not have access to the company's AWS account. What is the best way for the company to give the vendor access?",
    answers: [
      "Add the vendor's IAM user to an IAM group in the company's account.",
      "Create a new identity provider using the vendor's AWS account ID and user name.",
      "Create an IAM role in the company's account and allow the vendor's IAM role to assume it.",
      "Create an IAM user in the company's account with a password and give the credentials to the vendor."
    ],
    correctAnswer: [2]
  },
  {
    question:
      'You are running a fleet of EC2 instances for a web server and have integrated them with Auto Scaling. Your security team has indicated that whenever a new server is added to the fleet, as a part of Auto Scaling, it should have the latest OS security fixes in it. What is the best way of achieving this objective?',
    answers: [
      'No action is needed. Since Auto Scaling is going to launch the new instance, it will already have all the security fixes pre-installed.',
      'Launch the instance with a bootstrapping script that is going to install the latest updates.',
      'Run a cron job on a weekly basis to schedule the security updates.',
      'Once Auto Scaling launches a new EC2 instance, log in to it and apply the security updates.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'An application hosted on Amazon EC2 instances needs to access an Amazon S3 bucket. The traffic must not go through the internet. What should a solutions architect configure to meet these requirements?',
    answers: [
      'Establish an AWS Site-to-Site VPN connection between the VPC and the S3 bucket.',
      'Configure the EC2 instances to use a NAT gateway to access the S3 bucket.',
      'Create a private hosted zone using Amazon Route 53.',
      'Set up a gateway VPC endpoint for Amazon S3 in the VPC.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'A company uses Amazon EC2 instances to run an application. The application gets messages from an SQS queue, writes to an RDS table, and deletes the message from the queue. Sometimes duplicate records are found in the RDS table, even though there are no duplicates in the SQS queue. What should be done to ensure each message is processed only once?',
    answers: [
      'Create a new SQS queue.',
      'Add appropriate permissions using the AddPermission API.',
      'Increase the visibility timeout using the ChangeMessageVisibility API.',
      'Set an appropriate wait time using the ReceiveMessage API.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'The risk with spot instances is that you are not guaranteed use of a resource for as long as you might want. Which of the following are scenarios under which AWS might execute a forced shutdown? (Select four)',
    answers: [
      'AWS sends a notification of termination, and you receive it 120 seconds before the intended forced shutdown.',
      'AWS sends a notification of termination, but you do not receive it within the 120 seconds and the instance is shut down.',
      'AWS sends a notification of termination, and you receive it 120 seconds before the forced shutdown, but you delay it by sending a “Delay300” instruction before the forced shutdown takes effect.',
      'AWS sends a notification of termination, and you receive it 120 seconds before the intended forced shutdown, but AWS does not shut down the instance.',
      'AWS sends a notification of termination, and you receive it 120 seconds before the forced shutdown, but you block the shutdown because you used “Termination Protection” when you initialized the instance.',
      'AWS sends a notification of termination, and you receive it 120 seconds before the forced shutdown, but the normal lease expired before the forced shutdown.'
    ],
    correctAnswer: [0, 1, 3, 5]
  },
  {
    question:
      'A solutions architect has a nightly batch processing job that runs at 1 AM. The job scales up EC2 capacity for 1 hour before reaching the desired level. The peak capacity is the same every night. The solutions architect wants the job to reach the desired EC2 capacity quickly when it starts. They also want the Auto Scaling group to scale down after the batch job finishes. What should the solutions architect do to meet these requirements?',
    answers: [
      'Increase the maximum capacity for the Auto Scaling group.',
      'Increase the minimum capacity for the Auto Scaling group.',
      'Configure scheduled scaling to scale up to the desired compute level before the batch job starts.',
      'Change the scaling policy to add more EC2 instances faster during scaling.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'A company gets 10 TB of data every day from machines in a factory. The data is in JSON files on a storage area network in an on-site data center. The company wants to send this data to Amazon S3 so other systems can access it for analytics. Secure transfer is important because the data is sensitive. What AWS service offers the most reliable data transfer?',
    answers: [
      'AWS DataSync over AWS Direct Connect',
      'AWS DataSync over the public internet',
      'AWS Database Migration Service over the public internet',
      'AWS Database Migration Service over AWS Direct Connect'
    ],
    correctAnswer: [0]
  },
  {
    question:
      'A company wants to modernize a distributed application to maximize resiliency and scalability. The application serves variable workloads and consists of a primary server that coordinates jobs across multiple compute nodes. How should a solutions architect design the architecture?',
    answers: [
      'Use Auto Scaling group for primary server and compute nodes. Use CloudTrail for job queueing. Scale based on primary server load.',
      'Use Amazon SQS for job queueing and Auto Scaling group for compute nodes. Use scheduled scaling.',
      'Use Amazon SQS for job queueing and Auto Scaling group for compute nodes. Scale based on queue size.',
      'Use Auto Scaling group for primary server and compute nodes. Use EventBridge for job queueing. Scale based on compute node load.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'A company has a web application running on Amazon EC2 instances behind an Application Load Balancer. The application uses an Amazon Aurora database. The company needs a disaster recovery solution that can tolerate up to 30 minutes of downtime and data loss. The solution does not need to handle traffic when the primary system is healthy. What should be done to meet these requirements?',
    answers: [
      'Deploy a scaled-down version of the application in a second AWS Region. Use Route 53 for active-active failover. Create an Aurora Replica in the second Region.',
      'Replicate the primary infrastructure in a second AWS Region. Use Route 53 for active-active failover. Create an Aurora database restored from the latest snapshot.',
      'Use AWS Backup to back up the data. Restore the backup in a second AWS Region to create the infrastructure. Use Route 53 for active-passive failover. Create a second Aurora primary instance in the second Region.',
      'Deploy the application and infrastructure in a second AWS Region. Use Route 53 for active-passive failover. Create an Aurora Replica in the second Region.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'A company needs to back up a DynamoDB table every month. The backups must be kept for 6 months and available for restore. After 6 months, the backups must be retained but moved to cold storage. How can the company meet these requirements?',
    answers: [
      'Write a script to create monthly backups. Write another script to transition and delete backups after 6 and 7 months.',
      'Use AWS Backup to create monthly backups. Transition backups to cold storage after 6 months. Retain backups for 7 years.',
      'Use AWS Lambda to trigger backups when the table is modified. Move backups to S3 Standard after 6 months and delete after 7 years.',
      'Create monthly on-demand backups. After 6 months, move backups to S3 Glacier using lifecycle rules. Keep backups for 7 years.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'A company uses consolidated billing across multiple AWS accounts. The company runs Amazon RDS for Oracle On-Demand DB instances for 90 days. The finance team needs to review Trusted Advisor recommendations to reduce RDS costs. What two steps should the finance team take?',
    answers: [
      'Review the Trusted Advisor check for RDS Reserved Instance Optimization.',
      'Review Trusted Advisor recommendations in the consolidated billing account.',
      'Review the Trusted Advisor check for RDS Idle DB Instances.',
      'Review Trusted Advisor recommendations in the account where the RDS instances are running.'
    ],
    correctAnswer: [0, 1]
  },
  {
    question:
      'You want to host an application on EC2 and use the EBS volume for storing the data. One of the requirements is to encrypt the data at rest. What is the cheapest way to achieve this?',
    answers: [
      'Copy the data from EBS to S3 and encrypt the S3 buckets.',
      'Make sure that when the data is written to application, it is encrypted.',
      'Use a third-party tool to encrypt the data.',
      'Configure encryption when creating the EBS volume so that data will be encrypted when at rest.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'You are a developer and would like to run your code without provisioning or managing servers. Which service would you choose to do so and at the same time make sure it performs well operationally and at minimal cost?',
    answers: [
      'Use AWS Lambda.',
      'Use AWS S3.',
      'Launch an EC2 server and run the code from there.',
      'Use API Gateway.'
    ],
    correctAnswer: [0]
  },
  {
    question:
      'A company needs to implement a shared storage solution for a gaming application hosted in their data center. The solution must support Lustre clients to access data and be fully managed. Which AWS service meets these requirements?',
    answers: [
      'Create an AWS Storage Gateway file gateway and connect the application server to the file share.',
      'Create an Amazon EC2 instance with a Windows file share role and connect the application server to it.',
      'Create an Amazon EFS file system configured for Lustre and connect the application server to it.',
      'Create an Amazon FSx for Lustre file system and connect the application server to it.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'You have a database-style application that frequently has multiple reads and writes across the data set. Which of the following AWS storage services are capable of hosting this application? (Select two)',
    answers: ['Elastic File Service (EFS)', 'S3', 'EBS', 'Glacier'],
    correctAnswer: [0, 2]
  },
  {
    question:
      'A company has a web application running on Amazon EC2 instances in a private subnet. An Application Load Balancer in the public subnets directs traffic to the EC2 instances. The company wants to allow traffic to the EC2 instances only from the ALB, and block other access. What should they do?',
    answers: [
      'Move the EC2 instances to the public subnet and assign Elastic IP addresses.',
      'Configure a route table rule to send internet traffic to the EC2 private IP addresses.',
      'Configure the EC2 security group to allow traffic only from the ALB security group.',
      'Allow any TCP traffic to the ALB from any port.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'A company needs to store confidential data in Amazon S3. The data must be encrypted when stored. The encryption key usage must be logged for auditing. The keys must be rotated every year. What is the most efficient solution that meets these requirements?',
    answers: [
      'Server-side encryption with AWS KMS keys (SSE-KMS) with manual rotation',
      'Server-side encryption with AWS KMS keys (SSE-KMS) with automatic rotation',
      'Server-side encryption with customer-provided keys (SSE-C)',
      'Server-side encryption with Amazon S3 managed keys (SSE-S3)'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'A company is moving an application from on-premises to AWS. The application uses a MySQL database. Users experience slow response times when developers copy production data to staging every 4 hours. How can the architecture be changed to improve performance and allow ongoing copies to staging?',
    answers: [
      'Use Amazon RDS MySQL Multi-AZ with read replicas for production and use the standby for staging.',
      'Use Amazon RDS MySQL Multi-AZ with read replicas and mysqldump utility for staging.',
      'Use Amazon Aurora MySQL with Multi-AZ replicas for production and database cloning for staging.',
      'Use Amazon Aurora MySQL Multi-AZ replicas and mysqldump utility for staging.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'While doing an audit for a company, you find that the company has kept a lot of log files in a public bucket in Amazon S3. You try to delete them but are unable to do so. What could be the reason for this?',
    answers: [
      "You are not the owner of the bucket; that’s why you can't delete them.",
      'The log files in the buckets are encrypted.',
      'The versioning is enabled in the bucket.',
      'Only an employee of the company can delete objects.'
    ],
    correctAnswer: [0]
  },
  {
    question:
      'A company wants to migrate a multi-tier application from on-premises to AWS Cloud to improve performance. The application has tiers communicating via REST APIs. Transactions are dropped when a tier gets overloaded. A solutions architect must design a solution to fix these issues and modernize the application.',
    answers: [
      'Use SNS for messaging between EC2 servers in an Auto Scaling group. Monitor SNS queue length with CloudWatch and scale up/down as needed.',
      'Analyze performance history to determine peak utilization during failures. Increase EC2 instance sizes to meet peak requirements.',
      'Use API Gateway and Lambda functions for the application layer, and SQS for communication between services.',
      'Use SQS for messaging between EC2 servers in an Auto Scaling group. Monitor SQS queue length with CloudWatch and scale up on failures.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'A company needs to periodically rotate the passwords for its MySQL databases in multiple AWS Regions. What is the solution that requires the least operational overhead?',
    answers: [
      'Store encrypted passwords in Amazon S3, use EventBridge to trigger a Lambda function to rotate them.',
      'Use AWS Systems Manager Parameter Store to store the passwords, enable multi-Region replication, and configure automatic rotation.',
      'Use AWS Secrets Manager to store the passwords, enable multi-Region secret replication, and configure automatic rotation.',
      'Encrypt passwords using KMS, store in DynamoDB global table, use Lambda to retrieve and rotate.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'A company launched a new application on Amazon ECS Fargate. The company expects high traffic when the application launches. The company wants to reduce costs when traffic decreases. What should the solutions architect recommend to autoscale the ECS cluster?',
    answers: [
      'Use EC2 Auto Scaling with simple policies to scale ECS when a CloudWatch alarm is triggered by a metric breach.',
      'Use an AWS Lambda function to scale ECS when a CloudWatch alarm is triggered by a metric breach.',
      'Use Amazon EC2 Auto Scaling to scale at certain times based on past traffic patterns.',
      'Use Application Auto Scaling with target tracking to scale ECS when a CloudWatch alarm is triggered by a metric breach.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'A company has Windows file shares hosted on Amazon EC2 instances. The file shares sync data and maintain duplicate copies. The company wants a storage solution that is highly available, durable, and preserves how users access files. What should be done?',
    answers: [
      'Extend to Amazon EFS Multi-AZ and migrate data.',
      'Set up Amazon S3 File Gateway and mount it on EC2 instances.',
      'Extend to Amazon FSx for Windows File Server Multi-AZ and migrate data.',
      'Migrate data to Amazon S3 and set up IAM authentication for users.'
    ],
    correctAnswer: [0]
  },
  {
    question: 'With EBS, you can do which of the following? (Select two)',
    answers: [
      'Encrypt an existing volume.',
      'Create an encrypted volume from a snapshot of another encrypted volume.',
      'Create an unencrypted volume from an encrypted snapshot.',
      'Create an encrypted snapshot from an unencrypted snapshot by creating an encrypted copy of the unencrypted snapshot.'
    ],
    correctAnswer: [1, 3]
  },
  {
    question:
      'A company hosts a static website on Amazon CloudFront in front of Amazon S3. The website uses a database backend. The company updated the website code in Git but the live site does not show the changes. The CI/CD pipeline between Git and S3 is working correctly. What should the company do to display the website updates?',
    answers: [
      'Invalidate the CloudFront cache.',
      'Add caching with Amazon ElastiCache.',
      'Use AWS Certificate Manager to validate the SSL certificate.',
      'Add an Application Load Balancer.'
    ],
    correctAnswer: [0]
  },
  {
    question:
      'You are reviewing Change Control requests and note a proposed change designed to reduce errors due to S3 Eventual Consistency by updating the DelaySeconds attribute. What does this mean?',
    answers: [
      'When a consumer instance retrieves a message, that message will be hidden in the queue for a fixed period of time.',
      'While processing a message, a consumer instance can reset the message visibility by restarting the preset timeout counter.',
      'When the consumer instance polls for new work, the consumer instance will wait a certain amount of time until it has a full workload before closing the connection.',
      'When the consumer instance polls for new work, the SQS service will allow it to wait a certain amount of time for a message to be available before closing the connection.',
      'When a new message is added to the SQS queue, it will be hidden from consumer instances for a fixed period of time.',
      'While processing a message, a consumer instance can amend the message visibility counter by a fixed amount.'
    ],
    correctAnswer: [4]
  },
  {
    question:
      'A company is using Amazon API Gateway in two Regions. A solutions architect must protect the API Gateway APIs from attacks like SQL injection. What is the solution that requires the least administration?',
    answers: [
      'Set up AWS Firewall Manager in both Regions. Use it to configure WAF rules.',
      'Set up AWS Shield in one Region. Associate Shield rules with API stages.',
      'Set up AWS Shield in both Regions. Associate Shield rules with API stages.',
      'Set up AWS WAF in both Regions. Associate WAF rules with API stages.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'You are reviewing Change Control requests and note a change designed to reduce costs by updating the WaitTimeSeconds attribute. What does this mean?',
    answers: [
      'When the consumer instance polls for new work, the consumer instance will wait a certain amount of time until it has a full workload before closing the connection.',
      'While processing a message, a consumer instance can amend the message visibility counter by a fixed amount.',
      'While processing a message, a consumer instance can reset the message visibility by restarting the preset timeout counter.',
      'When a consumer instance retrieves a message, that message will be hidden in the queue for a fixed period of time.',
      'When a new message is added to the SQS queue, it will be hidden from consumer instances for a fixed period of time.',
      'When the consumer instance polls for new work, the SQS service will allow it to wait a certain amount of time for one or more messages to be available before closing the connection.'
    ],
    correctAnswer: [5]
  },
  {
    question:
      'A company stores over 5 TB of files on Windows servers located in their office. Employees access these files daily. The company is moving their Windows systems to AWS. The company needs to access both their AWS and office file storage with low latency. They want a solution that requires little IT work and no major changes to how files are accessed. The company connects their office and AWS with a VPN. What should a solutions architect do to meet these needs?',
    answers: [
      'Set up an S3 File Gateway in the office. Move office files there. Update office and AWS systems to use the gateway.',
      'Set up an S3 File Gateway in the office. Move office files to S3. Update systems to use S3 or the gateway.',
      'Set up Amazon FSx for Windows File Server in AWS. Move the office files there. Update systems to use FSx.',
      'Set up FSx for Windows in AWS. Set up an FSx File Gateway in the office. Move office files to the gateway. Configure AWS systems for FSx and office systems for the gateway.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'To save money, you quickly store some data on the root volume of an EC2 instance and stop it for the weekend. When you return on Monday and restart your instance, you discover that your data is gone. Why might that be?',
    answers: [
      'The instance failed to connect to the root volume on Monday.',
      'The Elastic block-level storage service failed over the weekend.',
      'The root volume was ephemeral, block-level storage. Data on an instance store volume is lost if an instance is stopped.',
      'The EBS volume was not large enough to store your data.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'A company uses AWS Organizations to manage multiple AWS accounts. The management account has an Amazon S3 bucket with project reports. The company wants to limit access to this S3 bucket only to users of accounts within their AWS Organizations. What is the solution that meets these requirements with the least operational overhead?',
    answers: [
      'Create an OU for each department. Add the aws:PrincipalOrgPaths key to the S3 bucket policy.',
      'Use CloudTrail to monitor account events. Update the S3 bucket policy accordingly.',
      'Tag each user needing access. Add the aws:PrincipalTag key to the S3 bucket policy.',
      'Add the aws:PrincipalOrgID global condition key with the organization ID to the S3 bucket policy.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'A company has a web application hosted on multiple Amazon EC2 instances. The EC2 instances are in an Auto Scaling group that adds or removes instances based on user demand. The company wants to optimize cost savings without a long-term commitment. Which EC2 instance purchasing option should be recommended to meet these requirements?',
    answers: [
      'On-Demand Instances only',
      'Dedicated Instances only',
      'A mix of On-Demand and Spot Instances',
      'A mix of On-Demand and Reserved Instances'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'A company stores sensitive user data in an Amazon S3 bucket. The company wants to allow secure access to this S3 bucket from Amazon EC2 instances running inside a VPC. What two steps should be taken to accomplish this?',
    answers: [
      'Create an IAM user with S3 access and put credentials on EC2 instances.',
      'Use a NAT instance for EC2 instances to access the S3 bucket.',
      'Create a bucket policy to restrict access to only EC2 instances in the VPC.',
      'Configure a VPC endpoint for Amazon S3 within the VPC.'
    ],
    correctAnswer: [2, 3]
  },
  {
    question:
      'Company staff say the application is slow in the morning. The application runs on Amazon EC2 instances behind a Load Balancer. The instances are in an Auto Scaling group across Availability Zones. The Auto Scaling group has 2 instances overnight but scales up to 20 during work hours. How can the scaling be changed to improve performance in the morning and keep costs low?',
    answers: [
      'Use a step scaling action triggered at lower CPU threshold and decrease the cooldown period.',
      'Set the minimum and maximum capacity to 20 before the office opens using a scheduled action.',
      'Use a target tracking action triggered at lower CPU threshold and decrease the cooldown period.',
      'Set the desired capacity to 20 shortly before the office opens using a scheduled action.'
    ],
    correctAnswer: [0]
  },
  {
    question:
      'A company is running a web application on Amazon EC2 instances in multiple Availability Zones. The EC2 instances are in private subnets. An Application Load Balancer is created that is internet-facing. The EC2 instances are specified as the target group for the load balancer. However, internet traffic is not reaching the EC2 instances. What should be done to allow the internet traffic to reach the EC2 instances?',
    answers: [
      'Configure a NAT gateway in a public subnet to allow internet traffic to the private subnets.',
      'Update the route table for the EC2 subnets to send internet traffic to the internet gateway.',
      'Move the EC2 instances to public subnets.',
      'Create public subnets, associate them with the load balancer, and update routing.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'A company has a three-level application for sharing images. The application uses Amazon EC2 instances for the front-end, application, and database layers. A solutions architect must design a scalable and highly available solution with the least changes to the application. What should the architect do?',
    answers: [
      'Use AWS CloudFront for the front-end, Amazon SQS for the application layer, and Amazon Redshift for the database.',
      'Use Elastic Beanstalk with load balancing and multiple Availability Zones for the front-end and application layers. Use RDS with read replicas for the database and to serve images.',
      'Use S3 for the front-end, an Auto Scaling group of EC2 instances for the application layer, and a memory optimized instance for the database to store and serve images.',
      'Use Amazon S3 for the front-end, AWS Lambda for the application layer, and DynamoDB for the database. Use S3 to store images.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'Your company provides an online image recognition service and uses SQS to decouple system components. Your EC2 instances poll the image queue as often as possible to keep end-to-end throughput as high as possible, but you realize that all this polling is resulting in both a large number of CPU cycles and skyrocketing costs. How can you reduce cost without compromising service?',
    answers: [
      'Enable short polling by setting ReceiveMessageWaitTimeSeconds to a number greater than 0.',
      'Enable short polling by setting ReceiveMessageWaitTimeMinutes to a number greater than 0.',
      'Enable long polling by setting ReceiveMessageWaitTimeMinutes to a number greater than 0.',
      'Enable long polling by setting ReceiveMessageWaitTimeSeconds to a number greater than 0.'
    ],
    correctAnswer: [3]
  },
  {
    question: 'What is the range for a CIDR block used inside a VPC?',
    answers: [
      'Between /16 and /30',
      'Between /18 to /24',
      'Between /14 and /24',
      'Between /16 and /28'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'A solutions architect needs to protect sensitive user data submitted through an HTTPS application. The data should be secured throughout the application stack and restricted to certain applications. What should the architect do?',
    answers: [
      'Enable signed cookies in CloudFront.',
      'Configure field-level encryption in CloudFront.',
      'Set up signed URLs in CloudFront.',
      'Set viewer protocol policy to HTTPS Only in CloudFront.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'A company has a database with over 10 million rows. There are millions of updates to the data every day. Some insert operations are taking over 10 seconds. The company determined the database storage performance is the problem. What should the company do to improve insert performance?',
    answers: [
      'Change to Provisioned IOPS SSD storage.',
      'Change to a burstable performance DB instance.',
      'Change to a memory optimized DB instance.',
      'Enable Multi-AZ read replicas.'
    ],
    correctAnswer: [0]
  },
  {
    question:
      'A company is creating a cloud communication platform using APIs. The platform runs on Amazon EC2 servers behind a Network Load Balancer. The company uses Amazon API Gateway so external users can access the platform through APIs. The company wants to protect against exploits like SQL injection and large DDoS attacks. Which two solutions provide the most protection?',
    answers: [
      'Use Amazon GuardDuty with AWS Shield Standard.',
      'Use AWS Shield Advanced with the Network Load Balancer.',
      'Use AWS WAF to protect Amazon API Gateway.',
      'Use AWS WAF to protect the Network Load Balancer.'
    ],
    correctAnswer: [1, 2]
  },
  {
    question:
      'A company stores documents uploaded by users. New regulations say documents cannot be changed or deleted after storing. What should the solutions architect do to meet this requirement?',
    answers: [
      'Store documents in an S3 bucket with versioning. Restrict access to read-only.',
      'Store documents on EFS. Mount the volume read-only.',
      'Store documents in an S3 bucket with versioning and object lock enabled.',
      'Store documents in an S3 bucket. Archive the documents periodically.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'A company has a fleet of web servers that use a PostgreSQL database hosted on Amazon RDS. The company now requires that the database has a recovery point objective (RPO) of less than 1 second. What solution would meet this requirement?',
    answers: [
      'Enable auto scaling for the DB instance in one Availability Zone',
      'Configure the DB instance in one Availability Zone and create multiple read replicas in a separate Availability Zone',
      'Configure the DB instance in one Availability Zone and use AWS Database Migration Service (DMS) change data capture (CDC)',
      'Enable Multi-AZ deployment for the DB instance'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'A company needs to store medical trial results in an Amazon S3 bucket. The bucket must allow a few scientists to add new files. It must restrict all other users to read-only access. No users can modify or delete files. The company must retain every file for 1 year after creation. Which solution meets these requirements?',
    answers: [
      'Use S3 Object Lock in governance mode with a 1 year legal hold.',
      'Use S3 Object Lock in compliance mode with a 365 day retention period.',
      'Use an IAM role to restrict users from changing or deleting objects, and an S3 bucket policy to allow only that IAM role.',
      'Configure an AWS Lambda function triggered by new objects to track hashes so modified objects can be marked.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'A company is running an important business application on Amazon EC2 instances behind an Application Load Balancer. The EC2 instances are in an Auto Scaling group and connect to an Amazon RDS database instance. The design did not pass a review because the EC2 instances and database are in one Availability Zone. How can the solutions architect update the design to be highly available across two Availability Zones?',
    answers: [
      'Put a subnet across both Zones. Configure the Auto Scaling group to spread EC2 instances across both Zones. Configure the database for Multi-AZ deployment.',
      'Put a subnet in each Zone. Configure the Auto Scaling group to spread EC2 instances across both Zones. Configure the database for Multi-AZ deployment.',
      'Put two subnets across both Zones. Configure the Auto Scaling group to spread EC2 instances across both Zones. Configure the database instance to connect to each network.',
      'Put a subnet in each Availability Zone. Configure the Auto Scaling group to spread EC2 instances across both Zones. Configure the database instance to connect to each network.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'You have created a non-default VPC that contains two web servers. These web servers must be publicly accessible via the Internet and should also be highly resilient. Which of the following configurations should you consider? (Select two)',
    answers: [
      'Assign each EC2 instance with an Elastic IP address. Configure Route 53 with both EIPs and set up health checks with DNS failover.',
      'Set up an Elastic Load Balancer and place your two web servers behind it in different Availability Zones. Configure a Route 53 CNAME to use the public DNS address of the Elastic Load Balancer.',
      "Configure a NAT instance within your VPC. Create a route via the NAT and associate it with all private subnets within your VPC. Create a Route 53 'A' record to point to the public IP address of the NAT.",
      "Set up an Elastic Load Balancer and place your two web servers behind it in different Availability Zones. Configure a Route 53 'A' record to point to the IP address of the Elastic Load Balancer."
    ],
    correctAnswer: [0, 1]
  },
  {
    question:
      'You work for a busy real estate company, and you need to protect your data stored on S3 from accidental deletion. Which of the following actions might you take to achieve this? (Select two)',
    answers: [
      'Create a bucket policy that prohibits anyone from accessing things from the bucket.',
      'Use signed URLs so that users will not be able to accidentally delete data.',
      'Enable protected access using multifactor authentication (MFA).',
      'Enable versioning on the bucket. If a file is accidentally deleted, delete the delete marker.',
      'Enable S3 - Infrequent Access (S3 - IA) storage.'
    ],
    correctAnswer: [2, 3]
  },
  {
    question:
      'A company is using Amazon Aurora for its global ecommerce application. When large reports run, the application performs poorly. The ReadIOPS and CPUUtilization metrics spike when monthly reports run. What is the most cost-effective solution to improve performance?',
    answers: [
      'Migrate the monthly reporting to an Aurora Replica.',
      'Migrate the Aurora database to a larger instance class.',
      'Migrate the monthly reporting to Amazon Redshift.',
      'Increase the Provisioned IOPS on the Aurora instance.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      "A company stores product data in an Amazon RDS MySQL database. Users at the company headquarters access this data. The operations team noticed the application running slowly. They want to separate read traffic from write traffic to improve performance. What should the solutions architect recommend to optimize the application's performance quickly?",
    answers: [
      'Change to a Multi-AZ deployment. Serve reads from the secondary Availability Zone.',
      'Create read replicas with half the compute and storage as the source database.',
      'Create read replicas with the same compute and storage as the source database.',
      'Change to a Multi-AZ deployment. Serve reads from the primary Availability Zone.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'A company wants a report of AWS expenses by user for budget planning. What is the most efficient way to get this report?',
    answers: [
      'Download the billing details from the Billing Dashboard.',
      'Download a report from Cost Explorer.',
      'Run a query in Amazon Athena.',
      'Set up alerts in AWS Budgets.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'A company wants to move its Microsoft SharePoint file storage from its on-premises servers to the AWS Cloud. The storage must be highly available and let Active Directory control access. Which AWS service should the company use?',
    answers: [
      'An SMB file share on AWS Storage Gateway in multiple Availability Zones',
      'An Amazon FSx for Windows File Server with Active Directory authentication',
      'An Amazon S3 bucket mounted as a volume on Windows Server',
      'Amazon EFS file storage with Active Directory authentication'
    ],
    correctAnswer: [1]
  },
  {
    question:
      "You are running an application on EC2 instances and you want to add new functionality to your application. In order to add the functionality, your EC2 instance needs to write data in an S3 bucket. Your EC2 instance is already running and you can't stop/reboot/terminate it in order to add the new functionality. How will you achieve this? (Select two)",
    answers: [
      'Create a IAM role that allows write access to the S3 bucket.',
      'Attach the newly created IAM role to a running EC2 instance.',
      'Launch a new EC2 instance with an IAM role that can access the S3 bucket.',
      'Create a new user that has access to EC2 and S3.'
    ],
    correctAnswer: [0, 1]
  },
  {
    question:
      'A company wants to build a system to securely manage encryption keys for its developers. What AWS service should a solutions architect use to reduce operational effort?',
    answers: [
      'Use multi-factor authentication (MFA) to protect access to the encryption keys.',
      'Use AWS Certificate Manager (ACM) to create and assign the encryption keys.',
      'Use AWS Key Management Service (AWS KMS) to manage the encryption keys.',
      'Use an IAM policy to control who can access the encryption keys.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'You are planning to migrate your on-premises MySQL database to AWS. The size of the database is 36TB. You are expecting that the database will be three times that size by the end of the year. Your business is also looking for a high availability (HA) configuration with read replica, and replica lag should be less than 120 milliseconds. Which Amazon RDS engine meets these requirements?',
    answers: ['Microsoft SQL Server', 'Oracle', 'Amazon Aurora', 'MySQL'],
    correctAnswer: [2]
  },
  {
    question:
      'A solutions architect needs to implement document storage in Amazon S3. The solution must prevent accidental deletion of documents and retain all versions. Users must be able to download, modify and upload documents. What two actions should the architect take?',
    answers: [
      'Attach an IAM policy to the S3 bucket.',
      'Enable versioning on the S3 bucket.',
      'Enable MFA Delete on the S3 bucket.',
      'Enable encryption on the S3 bucket.'
    ],
    correctAnswer: [1, 2]
  },
  {
    question:
      'A company hosts a static website on Amazon S3. The company wants to add a contact form to its webpage. The contact form will allow users to input their name, email, phone number, and message. The company expects fewer than 100 visits per month. What is the most cost-effective way to meet these requirements?',
    answers: [
      'Convert the static site to dynamic with Amazon Lightsail and use client-side scripting for the form.',
      'Create an API Gateway endpoint with a Lambda function backend to call Amazon SES.',
      'Launch an EC2 instance to host a dynamic site with the contact form.',
      'Host the contact form page in Amazon ECS and use Amazon SES to connect to an email provider.'
    ],
    correctAnswer: [1]
  },
  {
    question:
      'A company runs an AWS Glue ETL job daily. The job processes XML data from an S3 bucket. New data is added to the bucket daily. The solutions architect notices Glue processes all data each run. What should the architect do to prevent reprocessing old data?',
    answers: [
      'Edit the job to delete data after processing.',
      'Use a FindMatches ML transform.',
      'Edit the job to set NumberOfWorkers to 1.',
      'Edit the job to use job bookmarks.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'A company is making a new mobile app. The company needs to protect its Application Load Balancer from attacks like cross-site scripting or SQL injection. The company has a small team to manage servers. What should the company do to meet these needs?',
    answers: [
      'Use AWS Shield Advanced and add the Load Balancer as a protected resource.',
      'Make a new Load Balancer that sends traffic to an Amazon EC2 instance running a firewall, which then passes traffic to the current Load Balancer.',
      'Put the app on Amazon S3 with public access enabled.',
      'Configure AWS WAF rules and connect them to the Application Load Balancer.'
    ],
    correctAnswer: [3]
  },
  {
    question:
      'A company hosts a static website on Amazon S3 and uses Amazon Route 53 for DNS. The website is getting more visitors from around the world. What will help the company reduce wait times for users accessing the website in the cheapest way possible?',
    answers: [
      'Turn on S3 Transfer Acceleration for the bucket. Edit the Route 53 records to point to the new endpoint.',
      "Set up accelerators in AWS Global Accelerator. Associate the provided IP addresses with the S3 bucket. Edit the Route 53 records to point to the accelerators' IP addresses.",
      'Add an Amazon CloudFront distribution in front of the S3 bucket. Edit the Route 53 records to point to the CloudFront distribution.',
      'Make copies of the S3 bucket containing the website in all AWS Regions. Add Route 53 geolocation routing entries.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'A company deployed a Java Spring Boot application in Amazon EKS. The application runs in private subnets and needs to access a DynamoDB table. What two things should be done to allow the application to access DynamoDB without exposing traffic to the internet?',
    answers: [
      'Embed the access keys in the Java code.',
      "Allow outbound connectivity to DynamoDB through the private subnets' network ACLs.",
      'Attach an IAM role with sufficient privileges to the EKS pod.',
      'Create a VPC endpoint for DynamoDB.'
    ],
    correctAnswer: [2, 3]
  },
  {
    question:
      'What are the workloads you can deploy using Elastic Beanstalk? (Select two)',
    answers: [
      'A web application',
      'A long-running job that runs overnight',
      'A static website',
      'Storing data lake data for big data processing'
    ],
    correctAnswer: [0, 2]
  },
  {
    question:
      'A company runs an application on Amazon EC2 instances. The company needs a disaster recovery solution for the application. The disaster recovery solution should have a recovery time of less than 4 hours. The disaster recovery solution should also use the fewest AWS resources possible during normal operations. What would achieve this solution?',
    answers: [
      'Launch EC2 instances in a secondary AWS Region. Keep the EC2 instances in the secondary Region running at all times.',
      'Create AMIs to back up the EC2 instances. Copy the AMIs to a secondary AWS Region. Use AWS Lambda and custom scripts to automate infrastructure deployment in the secondary Region.',
      'Create AMIs to back up the EC2 instances. Copy the AMIs to a secondary AWS Region. Use AWS CloudFormation to automate infrastructure deployment in the secondary Region.',
      'Launch EC2 instances in a secondary Availability Zone. Keep the EC2 instances in the secondary Availability Zone running at all times.'
    ],
    correctAnswer: [2]
  },
  {
    question:
      'Your company likes the idea of storing files on AWS. However, low-latency service for the last few days of files is important to customer service. Which Storage Gateway configuration would you use to achieve both these ends?',
    answers: [
      'Gateway-Cached',
      'Gateway-Stored',
      'Gateway-Snapshot',
      'Gateway-VTL'
    ],
    correctAnswer: [0]
  },
  {
    question:
      'A company has a workflow to ingest data. The workflow uses Amazon SNS for notifications and AWS Lambda to process the data. Sometimes the workflow fails due to network issues. When it fails, the Lambda function does not process the data unless the job is manually rerun. What should be done to ensure the Lambda function processes all data in the future?',
    answers: [
      'Create an Amazon SQS queue and subscribe it to the SNS topic.',
      'Increase provisioned throughput for the Lambda function.',
      'Increase the CPU and memory allocated to the Lambda function.',
      'Deploy the Lambda function in multiple Availability Zones.'
    ],
    correctAnswer: [0]
  }
]
