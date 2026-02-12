export interface BlogPost {
  slug: string
  title: string
  date: string
  author: string
  category: string
  excerpt: string
  readTime: string
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'understanding-zero-trust-architecture',
    title: 'Understanding Zero Trust Architecture in Modern Enterprises',
    date: '2026-02-10',
    author: 'Eddie Barlow',
    category: 'Security Architecture',
    excerpt: "Zero Trust is more than a buzzword—it's a fundamental shift in how we approach security. Learn how to implement Zero Trust principles in your organization.",
    readTime: '8 min read',
    content: `# Understanding Zero Trust Architecture in Modern Enterprises

Zero Trust is more than a buzzword—it's a fundamental shift in how we approach security. In today's threat landscape, the traditional perimeter-based security model is no longer sufficient. Organizations must adopt a "never trust, always verify" approach to protect their assets.

## What is Zero Trust?

Zero Trust is a security framework that requires all users, whether inside or outside the organization's network, to be authenticated, authorized, and continuously validated before being granted access to applications and data.

The core principle is simple: **trust nothing, verify everything**.

## Key Principles of Zero Trust

### 1. Verify Explicitly

Always authenticate and authorize based on all available data points, including:

- User identity
- Location
- Device health
- Service or workload
- Data classification
- Anomalies

### 2. Use Least Privilege Access

Limit user access with Just-In-Time and Just-Enough-Access (JIT/JEA), risk-based adaptive policies, and data protection to help secure both data and productivity.

### 3. Assume Breach

Minimize blast radius and segment access. Verify end-to-end encryption and use analytics to get visibility, drive threat detection, and improve defenses.

## Implementing Zero Trust

Here's a high-level approach to implementing Zero Trust in your organization:

1. Identify your protect surface (critical data, assets, applications, services)
2. Map the transaction flows
3. Build a Zero Trust architecture
4. Create Zero Trust policies
5. Monitor and maintain

## Benefits of Zero Trust

- **Reduced attack surface**: By segmenting networks and enforcing strict access controls
- **Better visibility**: Continuous monitoring provides insights into who is accessing what
- **Improved compliance**: Granular access controls help meet regulatory requirements
- **Enhanced data protection**: Data is protected regardless of where it resides

## Conclusion

Zero Trust is not a product you can buy—it's a strategy and a journey. Start small, focus on your most critical assets, and gradually expand your Zero Trust implementation across your organization.

The shift to Zero Trust requires a change in mindset, but the security benefits are well worth the effort.`
  },
  {
    slug: 'securing-cloud-infrastructure',
    title: 'Best Practices for Securing Cloud Infrastructure',
    date: '2026-02-05',
    author: 'Eddie Barlow',
    category: 'Cloud Security',
    excerpt: "Cloud security requires a different mindset than traditional on-premises security. Here are the essential practices every organization should follow.",
    readTime: '6 min read',
    content: `# Best Practices for Securing Cloud Infrastructure

Cloud security requires a different mindset than traditional on-premises security. The shared responsibility model means you need to understand exactly what you're responsible for securing.

## The Shared Responsibility Model

In cloud computing, security responsibilities are shared between the cloud provider and the customer:

- **Provider responsibility**: Physical security, network infrastructure, hypervisor
- **Customer responsibility**: Data, applications, identity management, OS configuration

## Essential Security Practices

### 1. Identity and Access Management (IAM)

IAM is the foundation of cloud security. Follow these principles:

- Implement least privilege access
- Use multi-factor authentication (MFA) everywhere
- Regularly audit and rotate credentials
- Use service accounts with minimal permissions

### 2. Network Security

Even in the cloud, network segmentation matters:

- Use Virtual Private Clouds (VPCs) to isolate workloads
- Implement security groups and network ACLs
- Use private subnets for sensitive resources
- Enable VPC flow logs for visibility

### 3. Data Protection

Protect your data at rest and in transit:

- Enable encryption for all storage services
- Use customer-managed keys when possible
- Implement proper key rotation policies
- Classify data and apply appropriate controls

### 4. Logging and Monitoring

You can't secure what you can't see:

- Enable cloud-native logging (CloudTrail, Azure Monitor, etc.)
- Centralize logs in a SIEM
- Set up alerts for suspicious activities
- Regularly review access patterns

## Common Mistakes to Avoid

1. **Overly permissive IAM policies** - Don't use wildcards in permissions
2. **Public S3 buckets** - Always verify bucket policies
3. **Hardcoded credentials** - Use secrets management services
4. **Ignoring security groups** - Review and audit regularly

## Conclusion

Cloud security is an ongoing process, not a one-time setup. Regular audits, continuous monitoring, and staying updated on new threats are essential for maintaining a secure cloud environment.`
  },
  {
    slug: 'incident-response-playbook',
    title: 'Building an Effective Incident Response Playbook',
    date: '2026-01-28',
    author: 'Eddie Barlow',
    category: 'Incident Response',
    excerpt: "A well-prepared incident response playbook can mean the difference between a minor security event and a major breach. Learn how to build one.",
    readTime: '10 min read',
    content: `# Building an Effective Incident Response Playbook

A well-prepared incident response playbook can mean the difference between a minor security event and a major breach. When an incident occurs, every minute counts—having documented procedures ensures your team can respond quickly and effectively.

## Why You Need a Playbook

Without a playbook, incident response becomes chaotic:

- Team members don't know their roles
- Critical steps get missed
- Communication breaks down
- Recovery takes longer than necessary

A good playbook provides clear, actionable guidance for your team when they need it most.

## The Six Phases of Incident Response

### 1. Preparation

This is the foundation of effective incident response:

- Define roles and responsibilities
- Establish communication channels
- Set up monitoring and alerting
- Conduct regular training and tabletop exercises
- Maintain an up-to-date asset inventory

### 2. Identification

Detecting and confirming an incident:

- Monitor security alerts and logs
- Establish criteria for declaring an incident
- Document initial findings
- Determine scope and severity

### 3. Containment

Limiting the damage:

**Short-term containment:**
- Isolate affected systems
- Block malicious IPs/domains
- Disable compromised accounts

**Long-term containment:**
- Apply temporary fixes
- Rebuild systems if necessary
- Implement additional monitoring

### 4. Eradication

Removing the threat:

- Identify root cause
- Remove malware and artifacts
- Patch vulnerabilities
- Update security controls

### 5. Recovery

Returning to normal operations:

- Restore systems from clean backups
- Verify system integrity
- Monitor for signs of re-infection
- Gradually return to production

### 6. Lessons Learned

Improving for the future:

- Conduct a post-incident review
- Document what worked and what didn't
- Update playbooks and procedures
- Share findings with stakeholders

## Key Elements of a Good Playbook

1. **Clear escalation paths** - Who to contact and when
2. **Decision trees** - Guide responders through common scenarios
3. **Checklists** - Ensure nothing gets missed
4. **Contact information** - Internal teams, vendors, law enforcement
5. **Communication templates** - Pre-approved messaging for stakeholders

## Conclusion

Your incident response playbook is a living document. Review and update it regularly, test it through exercises, and refine it based on real incidents. The time you invest in preparation will pay dividends when an incident occurs.`
  }
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug)
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
